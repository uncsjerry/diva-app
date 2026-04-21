import { MOCK_NOTIFICATIONS } from "@/lib/mock-notifications";
import { getSession } from "@/lib/auth";
import { NextRequest } from "next/server";

/**
 * GET /api/notifications
 * Returns notifications for the requesting user.
 *
 * - Regular users only see their own notifications (assignedTo === session.email)
 * - Admin (Emma) can pass ?email=someone@uncs.com to view any user, or ?email=all for everything
 *
 * WHY: Mock layer for POC. Production will query SugarCRM, Outlook,
 * Basecamp, and DIVA connectors on the EC2 instance (3.17.94.209).
 */
export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const status = searchParams.get("status") || "active";
  const emailParam = searchParams.get("email");

  // Determine which email to filter by
  let filterEmail: string | "all";
  if (session.isAdmin && emailParam) {
    filterEmail = emailParam; // admin can request any user or "all"
  } else {
    filterEmail = session.email; // regular users always see only their own
  }

  const filtered = MOCK_NOTIFICATIONS.filter((n) => {
    if (n.status !== status) return false;
    if (filterEmail === "all") return true;
    return n.assignedTo === filterEmail;
  });

  // Sort by priority (high first) then by recency
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  filtered.sort((a, b) => {
    const pDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (pDiff !== 0) return pDiff;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return Response.json({ notifications: filtered, count: filtered.length });
}

/**
 * PATCH /api/notifications
 * Update a notification's status (dismiss, snooze).
 */
export async function PATCH(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { id, status } = body;

  if (!id || !status) {
    return Response.json({ error: "Missing id or status" }, { status: 400 });
  }

  // WHY: In POC we just acknowledge the action. Production will persist to DB.
  return Response.json({ id, status, updated: true });
}
