import { Department, TriggerType } from "./types";

interface TriggerConfig {
  type: TriggerType;
  label: string;
  description: string;
  source: "sugarcrm" | "outlook" | "basecamp" | "diva";
  /** Departments that receive this trigger */
  departments: Department[];
  /** How long before a notification fires — see notes per trigger */
  thresholdHours: number;
}

export const TRIGGER_CONFIGS: TriggerConfig[] = [
  {
    type: "unanswered_email",
    label: "Unanswered Customer Email",
    description: "Customer email with no reply",
    source: "outlook",
    departments: ["sales", "buying"],
    thresholdHours: 24, // 24hr window before pinging
  },
  {
    type: "overdue_crm_task",
    label: "Overdue CRM Task",
    description: "SugarCRM task or follow-up past due date",
    source: "sugarcrm",
    departments: ["sales", "buying", "operations", "finance", "executive"],
    thresholdHours: 0, // Fires day-of and again when overdue
  },
  {
    type: "overdue_basecamp_task",
    label: "Overdue Basecamp Task",
    description: "Basecamp to-do past its due date",
    source: "basecamp",
    departments: ["sales", "buying", "operations", "finance", "executive"],
    thresholdHours: 0, // Fires day-of and again when overdue
  },
  {
    type: "diva_pricing_alert",
    label: "DIVA Pricing Alert",
    description: "Price changed on a product tied to your active deal",
    source: "diva",
    departments: ["sales", "buying"],
    thresholdHours: 0, // Immediate — pricing moves fast
  },
  {
    type: "deal_no_activity",
    label: "Stalled Deal",
    description: "Active deal with no CRM activity",
    source: "sugarcrm",
    departments: ["sales", "buying"],
    thresholdHours: 48, // 48hr window for follow-ups
  },
];

/** Returns triggers relevant to a given department */
export function getTriggersForDepartment(dept: Department): TriggerConfig[] {
  return TRIGGER_CONFIGS.filter((t) => t.departments.includes(dept));
}
