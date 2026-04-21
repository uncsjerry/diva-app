import { Employee } from "./types";

export interface EmployeeWithEmail extends Employee {
  email: string;
  isAdmin?: boolean;
}

/**
 * UNCS employee roster with emails for auth + notification routing.
 * Password for all accounts: uncs2026 (replace with Microsoft SSO in production)
 */
export const EMPLOYEES: EmployeeWithEmail[] = [
  /* ── Executive ── */
  { name: "Brett Rose",         department: "executive",  role: "CEO",              email: "brett@uncs.com" },
  { name: "Adele Harrington",   department: "executive",  role: "CCO",              email: "adele@uncs.com" },
  { name: "Jeremiah Gutierrez", department: "executive",  role: "President / COO",  email: "jeremiah@uncs.com" },
  { name: "Emma Avchen",        department: "executive",  role: "Marketing & AI Associate", email: "emma@uncs.com", isAdmin: true },
  { name: "Caputo",             department: "executive",  role: "Executive",        email: "caputo@uncs.com" },

  /* ── Sales ── */
  { name: "Matthew Levine",     department: "sales",      role: "EVP of Sales",               email: "matthew@uncs.com" },
  { name: "Zac Hartstone",      department: "sales",      role: "Sales Representative",       email: "zac@uncs.com" },
  { name: "Joe Venditti",       department: "sales",      role: "Sales Representative",       email: "joe@uncs.com" },
  { name: "Colby Abrahamoff",   department: "sales",      role: "Sales Representative",       email: "colby@uncs.com" },
  { name: "Harry Ruben",        department: "sales",      role: "International Buy/Sell",     email: "harry@uncs.com" },
  { name: "Leff",               department: "sales",      role: "Sales",                      email: "leff@uncs.com" },
  { name: "Kantor",             department: "sales",      role: "Sales",                      email: "kantor@uncs.com" },
  { name: "Guzman",             department: "sales",      role: "Sales",                      email: "guzman@uncs.com" },

  /* ── Buying ── */
  { name: "Gene Wisniewski",    department: "buying",     role: "EVP of Purchasing",  email: "gene@uncs.com" },
  { name: "Ronnie Williams",    department: "buying",     role: "Buyer",              email: "ronnie@uncs.com" },
  { name: "Carlos Sirgo",       department: "buying",     role: "Buyer",              email: "carlos@uncs.com" },
  { name: "Teresa Savage",      department: "buying",     role: "Buyer",              email: "teresa@uncs.com" },
  { name: "Brandon Tolmach",    department: "buying",     role: "Buyer",              email: "brandon@uncs.com" },
  { name: "Ryan Lasner",        department: "buying",     role: "Buyer",              email: "ryan@uncs.com" },
  { name: "Leung",              department: "buying",     role: "Buyer",              email: "leung@uncs.com" },
  { name: "Williams",           department: "buying",     role: "Buyer",              email: "williams@uncs.com" },
  { name: "Shelley Grover",     department: "buying",     role: "Buyer",              email: "shelley@uncs.com" },

  /* ── Operations ── */
  { name: "Paul Del Otero",     department: "operations", role: "VP of Compliance",       email: "paul@uncs.com" },
  { name: "Rachel Sirvan",      department: "operations", role: "Logistics Manager",      email: "rachel@uncs.com" },
  { name: "T. Seepersaud",      department: "operations", role: "Logistics Coordinator",  email: "seepersaud@uncs.com" },
  { name: "Adjua Sinclair",     department: "operations", role: "Buying Assistant",       email: "adjua@uncs.com" },
  { name: "Charissa Frank",     department: "operations", role: "Sales Assistant",        email: "charissa@uncs.com" },

  /* ── Finance ── */
  { name: "Daniel Hidalgo",     department: "finance",    role: "Controller",           email: "daniel@uncs.com" },
  { name: "Todd Hartstone",     department: "finance",    role: "CFO",                  email: "todd@uncs.com" },
  { name: "Karla Blandon",      department: "finance",    role: "Accounts Receivable",  email: "karla@uncs.com" },
];

export function findEmployee(email: string): EmployeeWithEmail | undefined {
  return EMPLOYEES.find((e) => e.email === email.toLowerCase());
}
