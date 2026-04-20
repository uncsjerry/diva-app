import { Employee } from "./types";

/**
 * UNCS employee roster for notification routing.
 * Updated 2026-04-20 per Jeremiah + Emma session.
 */
export const EMPLOYEES: Employee[] = [
  /* ── Executive ── */
  { name: "Brett Rose", department: "executive", role: "CEO" },
  { name: "Adele Harrington", department: "executive", role: "CCO" },
  { name: "Jeremiah Gutierrez", department: "executive", role: "President / COO" },
  { name: "Avchen", department: "executive", role: "Executive" },
  { name: "Caputo", department: "executive", role: "Executive" },

  /* ── Sales ── */
  { name: "Matthew Levine", department: "sales", role: "EVP of Sales" },
  { name: "Zac Hartstone", department: "sales", role: "Sales Representative" },
  { name: "Joe Venditti", department: "sales", role: "Sales Representative" },
  { name: "Colby Abrahamoff", department: "sales", role: "Sales Representative" },
  { name: "Harry Ruben", department: "sales", role: "International Buy/Sell" },
  { name: "Leff", department: "sales", role: "Sales" },
  { name: "Kantor", department: "sales", role: "Sales" },
  { name: "Guzman", department: "sales", role: "Sales" },

  /* ── Buying ── */
  { name: "Gene Wisniewski", department: "buying", role: "EVP of Purchasing" },
  { name: "Ronnie Williams", department: "buying", role: "Buyer" },
  { name: "Carlos Sirgo", department: "buying", role: "Buyer" },
  { name: "Teresa Savage", department: "buying", role: "Buyer" },
  { name: "Brandon Tolmach", department: "buying", role: "Buyer" },
  { name: "Ryan Lasner", department: "buying", role: "Buyer" },
  { name: "Leung", department: "buying", role: "Buyer" },
  { name: "Williams", department: "buying", role: "Buyer" },
  { name: "Shelley Grover", department: "buying", role: "Buyer" },

  /* ── Operations ── */
  { name: "Paul Del Otero", department: "operations", role: "VP of Compliance" },
  { name: "Rachel Sirvan", department: "operations", role: "Logistics Manager" },
  { name: "T. Seepersaud", department: "operations", role: "Logistics Coordinator" },
  { name: "Adjua Sinclair", department: "operations", role: "Buying Assistant" },
  { name: "Charissa Frank", department: "operations", role: "Sales Assistant" },

  /* ── Finance ── */
  { name: "Daniel Hidalgo", department: "finance", role: "Controller" },
  { name: "Todd Hartstone", department: "finance", role: "CFO" },
  { name: "Karla Blandon", department: "finance", role: "Accounts Receivable" },
];
