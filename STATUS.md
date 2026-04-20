# DIVA Notification App — Status

**Last updated:** 2026-04-20
**Phase:** POC (Proof of Concept)
**Live URL:** https://diva-p14ynftwo-uncs.vercel.app
**Repo:** https://github.com/uncsjerry/diva-app

## What This Is

A mobile-first PWA that monitors SugarCRM, DIVA, Outlook, and Basecamp and pushes notifications to UNCS employee phones when they need to act — missed follow-ups, unanswered emails, stalled deals, pricing changes.

## Current State

- **UI:** Fully functional dark-themed notification dashboard with filter tabs, priority stats, dismiss/snooze actions
- **Data:** Mock notifications for POC (8 realistic examples using real UNCS customer names)
- **PWA:** Service worker installed, manifest configured, installable on phones
- **API:** `/api/notifications` route with GET (list) and PATCH (dismiss/snooze)
- **Auth:** Not yet implemented — will use Microsoft SSO + SugarCRM login

## What Works

- Notification feed with priority ranking (high/medium/low)
- Filter by source: Email, CRM Tasks, Basecamp, Pricing Alerts, Stalled Deals
- Dismiss and snooze actions (optimistic UI update)
- Installable as PWA on iOS/Android

## What's Next

1. **Wire live connectors** — All 4 systems already have running connectors on EC2 (3.17.94.209). Replace mock data with real API calls.
2. **Microsoft SSO auth** — Employee login using existing Microsoft accounts
3. **Custom domain** — diva.uncs.com or similar
4. **SugarCRM deal stage definitions** — Jeremiah will provide to tune stalled-deal thresholds
5. **Native app** — iOS/Android after PWA proves out

## Top 5 MVP Notification Triggers

| # | Trigger | Threshold | Departments |
|---|---------|-----------|-------------|
| 1 | Unanswered customer email | >24 hrs | Sales, Buying |
| 2 | Overdue SugarCRM task/follow-up | Day-of + overdue | All |
| 3 | Overdue Basecamp task | Day-of + overdue | All |
| 4 | DIVA pricing alert on active deal | Immediate | Sales, Buying |
| 5 | Deal with no CRM activity | >48 hrs | Sales, Buying |

## Notification Rules

- Fire immediately when triggered — no quiet hours
- No escalation chain (for now)
- Department-based filtering — each role only sees relevant notifications
- Users act at their convenience

## Open Items

- [ ] SugarCRM deal stage definitions (waiting on Jeremiah)
- [ ] Wire EC2 live connectors to replace mock data
- [ ] Microsoft SSO implementation
- [ ] Custom domain setup
