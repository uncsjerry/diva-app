"use client";

import { Notification, TriggerType } from "@/lib/types";

const SOURCE_LABELS: Record<string, string> = {
  sugarcrm: "SugarCRM",
  outlook: "Outlook",
  basecamp: "Basecamp",
  diva: "DIVA",
};

const TRIGGER_ICONS: Record<TriggerType, string> = {
  unanswered_email: "envelope",
  overdue_crm_task: "clipboard-check",
  overdue_basecamp_task: "list-check",
  diva_pricing_alert: "chart-line",
  deal_no_activity: "handshake",
};

const PRIORITY_STYLES = {
  high: "border-l-danger",
  medium: "border-l-warning",
  low: "border-l-muted",
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

interface NotificationCardProps {
  notification: Notification;
  onDismiss: (id: string) => void;
  onSnooze: (id: string) => void;
}

export default function NotificationCard({
  notification,
  onDismiss,
  onSnooze,
}: NotificationCardProps) {
  const icon = TRIGGER_ICONS[notification.triggerType];

  return (
    <div
      className={`bg-card border border-card-border border-l-4 ${PRIORITY_STYLES[notification.priority]} rounded-lg p-4 transition-all hover:border-accent/40`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="shrink-0 w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-bold"
            title={icon}
          >
            {notification.source === "outlook"
              ? "M"
              : notification.source === "sugarcrm"
                ? "S"
                : notification.source === "basecamp"
                  ? "B"
                  : "D"}
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold truncate">
              {notification.title}
            </h3>
            <span className="text-xs text-muted">
              {SOURCE_LABELS[notification.source]} &middot;{" "}
              {timeAgo(notification.createdAt)}
            </span>
          </div>
        </div>
        <span
          className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
            notification.priority === "high"
              ? "bg-danger/15 text-danger"
              : notification.priority === "medium"
                ? "bg-warning/15 text-warning"
                : "bg-muted/15 text-muted"
          }`}
        >
          {notification.priority}
        </span>
      </div>

      {/* Body */}
      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
        {notification.body}
      </p>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        {notification.link && (
          <a
            href={notification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Open in {SOURCE_LABELS[notification.source]} &rarr;
          </a>
        )}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => onSnooze(notification.id)}
            className="text-xs text-muted hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-white/5"
          >
            Snooze
          </button>
          <button
            onClick={() => onDismiss(notification.id)}
            className="text-xs text-muted hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-white/5"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
