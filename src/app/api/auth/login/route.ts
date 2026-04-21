import { NextRequest, NextResponse } from "next/server";
import { findEmployee } from "@/lib/employees";
import { encodeSession, COOKIE_NAME } from "@/lib/auth";

// WHY: Shared internal password for POC. Replace with Microsoft Azure AD SSO in production.
const SHARED_PASSWORD = "uncs2026";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  if (password !== SHARED_PASSWORD) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const employee = findEmployee(email.trim().toLowerCase());
  if (!employee) {
    return NextResponse.json({ error: "Email not found in UNCS directory" }, { status: 401 });
  }

  const session = {
    name: employee.name,
    email: employee.email,
    department: employee.department,
    role: employee.role,
    isAdmin: employee.isAdmin ?? false,
  };

  const token = encodeSession(session);
  const res = NextResponse.json({ ok: true, name: employee.name });

  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return res;
}
