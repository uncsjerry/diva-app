"use client";

import { useRouter } from "next/navigation";
import { EMPLOYEES } from "@/lib/employees";
import { UserSession } from "@/lib/types";

interface AdminBarProps {
  session: UserSession;
  viewAs: string; // "all" | email
}

const DEPT_ORDER = ["executive", "sales", "buying", "operations", "finance"];

export default function AdminBar({ viewAs }: AdminBarProps) {
  const router = useRouter();

  function switchTo(value: string) {
    if (value === "all") {
      router.push("/");
    } else {
      router.push(`/?as=${encodeURIComponent(value)}`);
    }
    router.refresh();
  }

  const sortedEmployees = [...EMPLOYEES].sort(
    (a, b) => DEPT_ORDER.indexOf(a.department) - DEPT_ORDER.indexOf(b.department)
  );

  const viewingLabel =
    viewAs === "all"
      ? "All Notifications"
      : (EMPLOYEES.find((e) => e.email === viewAs)?.name ?? viewAs);

  return (
    <div className="bg-foreground/5 border-b border-card-border">
      <div className="max-w-2xl mx-auto px-4 py-2 flex items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent shrink-0">
          Admin
        </span>
        <span className="text-[10px] text-muted shrink-0">Viewing:</span>
        <select
          value={viewAs}
          onChange={(e) => switchTo(e.target.value)}
          className="flex-1 text-xs bg-card border border-card-border rounded-lg px-2 py-1 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 min-w-0"
        >
          <option value="all">All Notifications</option>
          <option value="emma@uncs.com">My Notifications (Emma)</option>
          <optgroup label="─────────────────">
            {sortedEmployees
              .filter((e) => e.email !== "emma@uncs.com")
              .map((e) => (
                <option key={e.email} value={e.email}>
                  {e.name} — {e.role}
                </option>
              ))}
          </optgroup>
        </select>
        {viewAs !== "all" && viewAs !== "emma@uncs.com" && (
          <span className="text-[10px] text-muted italic shrink-0 hidden sm:block">
            Viewing as {viewingLabel}
          </span>
        )}
      </div>
    </div>
  );
}
