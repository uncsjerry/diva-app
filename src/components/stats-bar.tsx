"use client";

import { Notification } from "@/lib/types";

interface StatsBarProps {
  notifications: Notification[];
}

export default function StatsBar({ notifications }: StatsBarProps) {
  const active = notifications.filter((n) => n.status === "active");
  const high = active.filter((n) => n.priority === "high").length;
  const medium = active.filter((n) => n.priority === "medium").length;
  const low = active.filter((n) => n.priority === "low").length;

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-card border border-card-border rounded-xl p-3 text-center shadow-sm">
        <p className="text-2xl font-bold text-danger">{high}</p>
        <p className="text-[10px] uppercase tracking-wider text-muted mt-1">
          Urgent
        </p>
      </div>
      <div className="bg-card border border-card-border rounded-xl p-3 text-center shadow-sm">
        <p className="text-2xl font-bold text-warning">{medium}</p>
        <p className="text-[10px] uppercase tracking-wider text-muted mt-1">
          Needs Attn
        </p>
      </div>
      <div className="bg-card border border-card-border rounded-xl p-3 text-center shadow-sm">
        <p className="text-2xl font-bold text-accent">{low}</p>
        <p className="text-[10px] uppercase tracking-wider text-muted mt-1">
          Low
        </p>
      </div>
    </div>
  );
}
