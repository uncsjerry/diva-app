"use client";

import { TriggerType } from "@/lib/types";

const FILTERS: { label: string; value: TriggerType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Email", value: "unanswered_email" },
  { label: "CRM Tasks", value: "overdue_crm_task" },
  { label: "Basecamp", value: "overdue_basecamp_task" },
  { label: "Pricing", value: "diva_pricing_alert" },
  { label: "Stalled", value: "deal_no_activity" },
];

interface FilterTabsProps {
  active: TriggerType | "all";
  onChange: (value: TriggerType | "all") => void;
}

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
            active === f.value
              ? "bg-accent text-white shadow-sm"
              : "bg-card border border-card-border text-muted hover:text-foreground hover:border-accent/40"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
