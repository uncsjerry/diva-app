import { Notification } from "./types";

/**
 * Mock notification data for POC — each notification is assigned to a specific employee.
 * WHY: Real connectors (SugarCRM, Outlook, Basecamp, DIVA) live on EC2 3.17.94.209.
 * This mock layer lets us build and validate the full UI before wiring live data.
 */
export const MOCK_NOTIFICATIONS: Notification[] = [
  /* ── Matthew Levine (EVP Sales) ── */
  {
    id: "n-001",
    triggerType: "unanswered_email",
    priority: "high",
    title: "Ross Stores — no reply in 26 hours",
    body: "Sarah Chen from Ross Stores sent a pricing question yesterday. No response from your team yet.",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    source: "outlook",
    status: "active",
    assignedTo: "matthew@uncs.com",
    link: "https://outlook.office.com",
  },
  {
    id: "n-012",
    triggerType: "deal_no_activity",
    priority: "low",
    title: "New inbound lead: Walmart HBA buyer",
    body: "DIVA flagged a new buyer contact at Walmart HBA. No outreach recorded yet.",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    source: "diva",
    status: "active",
    assignedTo: "matthew@uncs.com",
  },

  /* ── Zac Hartstone (Sales Rep) ── */
  {
    id: "n-002",
    triggerType: "overdue_crm_task",
    priority: "high",
    title: "Follow-up call with TJX overdue",
    body: "Scheduled follow-up was due today at 10:00 AM. Mark complete or reschedule.",
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    source: "sugarcrm",
    status: "active",
    assignedTo: "zac@uncs.com",
    link: "https://uncsdb.com",
  },

  /* ── Gene Wisniewski (EVP Purchasing) ── */
  {
    id: "n-003",
    triggerType: "diva_pricing_alert",
    priority: "high",
    title: "Price drop: SKU #44821 — Dove Body Wash 24oz",
    body: "DIVA detected a 12% price decrease on a product in your active deal with Dollar Tree. Review margin impact.",
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    source: "diva",
    status: "active",
    assignedTo: "gene@uncs.com",
  },
  {
    id: "n-013",
    triggerType: "diva_pricing_alert",
    priority: "medium",
    title: "New DIVA match: Lysol Spray — 5 potential buyers",
    body: "DIVA identified 5 customers with purchase history in this category. Availables not yet sent.",
    createdAt: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    source: "diva",
    status: "active",
    assignedTo: "gene@uncs.com",
  },

  /* ── Paul Del Otero (VP Compliance) ── */
  {
    id: "n-004",
    triggerType: "overdue_basecamp_task",
    priority: "medium",
    title: "Basecamp: Compliance audit docs due today",
    body: 'To-do "Upload Q1 compliance audit documents" is due today. Assigned to you in the Operations project.',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    source: "basecamp",
    status: "active",
    assignedTo: "paul@uncs.com",
    link: "https://basecamp.com",
  },

  /* ── Colby Abrahamoff (Sales Rep) ── */
  {
    id: "n-005",
    triggerType: "deal_no_activity",
    priority: "medium",
    title: "Deal stalled: Burlington — 3 days no activity",
    body: "Your Burlington Coat Factory deal has had no CRM activity since April 17. Last action was a sample shipment note.",
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    source: "sugarcrm",
    status: "active",
    assignedTo: "colby@uncs.com",
  },

  /* ── Joe Venditti (Sales Rep) ── */
  {
    id: "n-006",
    triggerType: "unanswered_email",
    priority: "medium",
    title: "Five Below — sample tracking question",
    body: "Buyer at Five Below asked for a tracking number 28 hours ago. Still unanswered.",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    source: "outlook",
    status: "active",
    assignedTo: "joe@uncs.com",
    link: "https://outlook.office.com",
  },

  /* ── Harry Ruben (International Buy/Sell) ── */
  {
    id: "n-007",
    triggerType: "overdue_crm_task",
    priority: "low",
    title: "Update contact info for Ollie's Bargain Outlet",
    body: "CRM task to verify and update buyer contacts was due yesterday.",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    source: "sugarcrm",
    status: "active",
    assignedTo: "harry@uncs.com",
  },

  /* ── Ryan Lasner (Buyer) ── */
  {
    id: "n-008",
    triggerType: "diva_pricing_alert",
    priority: "medium",
    title: "New DIVA match: Clorox Wipes — 3 potential buyers",
    body: "DIVA identified 3 customers who bought this category in the last 12 months. Availables not yet sent.",
    createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    source: "diva",
    status: "active",
    assignedTo: "ryan@uncs.com",
  },

  /* ── Emma Avchen (Marketing & AI) ── */
  {
    id: "n-009",
    triggerType: "overdue_basecamp_task",
    priority: "medium",
    title: "Basecamp: DIVA launch deck revisions due",
    body: 'To-do "Finalize DIVA external launch deck" is overdue by 1 day. Assigned in the Marketing project.',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    source: "basecamp",
    status: "active",
    assignedTo: "emma@uncs.com",
    link: "https://basecamp.com",
  },
  {
    id: "n-010",
    triggerType: "unanswered_email",
    priority: "low",
    title: "ActiveCampaign — April campaign draft awaiting review",
    body: "The April email campaign draft has been sitting in review for 2 days. No approval or edits recorded.",
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    source: "outlook",
    status: "active",
    assignedTo: "emma@uncs.com",
  },

  /* ── Jeremiah Gutierrez (President / COO) ── */
  {
    id: "n-011",
    triggerType: "overdue_basecamp_task",
    priority: "high",
    title: "Basecamp: Board deck due Friday — no updates in 4 days",
    body: 'To-do "Q2 board presentation" has had no activity since April 17. Due this Friday.',
    createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    source: "basecamp",
    status: "active",
    assignedTo: "jeremiah@uncs.com",
    link: "https://basecamp.com",
  },

  /* ── Daniel Hidalgo (Controller) ── */
  {
    id: "n-014",
    triggerType: "overdue_crm_task",
    priority: "high",
    title: "AR overdue: 3 open invoices past 60 days",
    body: "SugarCRM shows 3 customer accounts with invoices more than 60 days past due. Total exposure: $84,200.",
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    source: "sugarcrm",
    status: "active",
    assignedTo: "daniel@uncs.com",
    link: "https://uncsdb.com",
  },

  /* ── Rachel Sirvan (Logistics Manager) ── */
  {
    id: "n-015",
    triggerType: "overdue_basecamp_task",
    priority: "medium",
    title: "Basecamp: Carrier rate audit overdue",
    body: 'To-do "Q2 carrier rate comparison" was due April 19. No updates recorded.',
    createdAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
    source: "basecamp",
    status: "active",
    assignedTo: "rachel@uncs.com",
    link: "https://basecamp.com",
  },
];
