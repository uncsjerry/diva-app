import { MOCK_NOTIFICATIONS } from "@/lib/mock-notifications";
import { NextRequest } from "next/server";

/**
 * GET /api/notifications
 * Returns notifications for the current user, filtered by department.
 *
 * WHY: Mock layer for POC. Production will query SugarCRM, Outlook,
 * Basecamp, and DIVA connectors on the EC2 instance (3.17.94.209).
 *
 * Query params:
 *   status — filter by active|snoozed|dismissed (default: active)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const status = searchParams.get("status") || "active";

  const filtered = MOCK_NOTIFICATIONS.filter((n) => n.status === status);

  // Sort by priority (high first) then by recency
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  filtered.sort((a, b) => {
    const pDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (pDiff !== 0) return pDiff;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return Response.json({ notifications: filtered, count: filtered.length });
}

/**
 * PATCH /api/notifications
 * Update a notification's status (dismiss, snooze).
 */
export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { id, status } = body;

  if (!id || !status) {
    return Response.json(
      { error: "Missing id or status" },
      { status: 400 }
    );
  }

  // WHY: In POC we just acknowledge the action. Production will persist to DB.
  return Response.json({ id, status, updated: true });
}
