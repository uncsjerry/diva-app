/* ─── Departments ─── */

export type Department =
  | "executive"
  | "sales"
  | "buying"
  | "operations"
  | "finance";

export interface Employee {
  name: string;
  department: Department;
  role: string;
  email?: string;
}

/* ─── Notifications ─── */

export type TriggerType =
  | "unanswered_email"
  | "overdue_crm_task"
  | "overdue_basecamp_task"
  | "diva_pricing_alert"
  | "deal_no_activity";

export type Priority = "high" | "medium" | "low";

export interface Notification {
  id: string;
  triggerType: TriggerType;
  priority: Priority;
  title: string;
  body: string;
  /** ISO timestamp when the notification was generated */
  createdAt: string;
  /** The source system that generated this notification */
  source: "sugarcrm" | "outlook" | "basecamp" | "diva";
  /** Whether the user has dismissed or acted on it */
  status: "active" | "snoozed" | "dismissed";
  /** Email of the employee this notification belongs to */
  assignedTo: string;
  /** Optional deep-link back to the source record */
  link?: string;
}

/* ─── Auth ─── */

export interface UserSession {
  name: string;
  email: string;
  department: Department;
  role: string;
  isAdmin: boolean;
}
