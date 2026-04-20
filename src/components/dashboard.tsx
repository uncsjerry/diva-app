"use client";

import { useState, useEffect } from "react";
import { Notification, TriggerType } from "@/lib/types";
import NotificationCard from "./notification-card";
import StatsBar from "./stats-bar";
import FilterTabs from "./filter-tabs";

export default function Dashboard() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<TriggerType | "all">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  async function fetchNotifications() {
    try {
      const res = await fetch("/api/notifications?status=active");
      const data = await res.json();
      setNotifications(data.notifications);
    } catch {
      // WHY: Silently handle fetch errors in POC — production will have proper error handling
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleAction(id: string, status: "dismissed" | "snoozed") {
    // Optimistic update
    setNotifications((prev) => prev.filter((n) => n.id !== id));

    await fetch("/api/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  const filtered =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.triggerType === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <StatsBar notifications={notifications} />
      <FilterTabs active={filter} onChange={setFilter} />

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted text-sm">You&apos;re all caught up.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((n) => (
            <NotificationCard
              key={n.id}
              notification={n}
              onDismiss={(id) => handleAction(id, "dismissed")}
              onSnooze={(id) => handleAction(id, "snoozed")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
