# DIVA App — Architecture

## Stack

- **Framework:** Next.js 16 (Turbopack) + TypeScript
- **Styling:** Tailwind CSS (dark theme)
- **PWA:** Manual service worker (`public/sw.js`) + web manifest
- **Deploy:** Vercel (UNCS team)
- **Backend connectors:** EC2 instance at 3.17.94.209 (FastAPI services)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── notifications/
│   │       └── route.ts          # GET/PATCH notification API
│   ├── globals.css               # Tailwind + CSS variables (dark theme)
│   ├── layout.tsx                # Root layout with PWA metadata
│   └── page.tsx                  # Home page — renders Header + Dashboard
├── components/
│   ├── dashboard.tsx             # Main notification feed (client component)
│   ├── filter-tabs.tsx           # Source filter pills
│   ├── header.tsx                # App header with DIVA branding
│   ├── notification-card.tsx     # Individual notification card
│   ├── stats-bar.tsx             # Priority summary (urgent/needs attn/low)
│   └── sw-register.tsx           # Service worker registration
└── lib/
    ├── employees.ts              # UNCS employee roster by department
    ├── mock-notifications.ts     # POC mock data (replace with live API calls)
    ├── triggers.ts               # Trigger configs with department routing
    └── types.ts                  # TypeScript types for the whole app
```

## Data Flow (Current — Mock)

```
Dashboard (client) → fetch /api/notifications → mock-notifications.ts → Response
```

## Data Flow (Production — Planned)

```
Dashboard (client) → fetch /api/notifications → EC2 connectors → SugarCRM / Outlook / Basecamp / DIVA → Response
```

## EC2 Connectors (3.17.94.209)

All four data sources already have live connectors running:

| System | Port/Service | Protocol |
|--------|-------------|----------|
| SugarCRM (uncsdb.com) | MySQL direct | SOAP API / Direct DB |
| DIVA (uncs_diva) | MySQL direct | Direct DB |
| Microsoft Outlook | OAuth delegated | Microsoft Graph API |
| Basecamp | OAuth | Basecamp API |

## Departments

| Department | People | Notification Types |
|-----------|--------|-------------------|
| Executive (5) | Rose, Harrington, Gutierrez, Avchen, Caputo | Daily digest / rollup |
| Sales (8) | Levine, Hartstone, Venditti, Abrahamoff, Ruben, Leff, Kantor, Guzman | Emails, CRM, DIVA, stalled deals |
| Buying (9) | Wisniewski, Williams, Sirgo, Savage, Tolmach, Lasner, Leung, Williams, Grover | Emails, CRM, DIVA, stalled deals |
| Operations (5) | Del Otero, Sirvan, Seepersaud, Sinclair, Frank | Basecamp, logistics |
| Finance (3) | Hidalgo, Hartstone, Blandon | Basecamp, AR/AP |

## Key Design Decisions

- **PWA over native app** — Faster to POC, installable on phones, native app comes after validation
- **Manual service worker over next-pwa plugin** — Next.js 16 uses Turbopack which doesn't support webpack plugins
- **Mock data layer** — Lets us build and validate the full UI before wiring live data
- **No quiet hours** — Notifications fire immediately, staff acts at their convenience
- **Department-based filtering** — Defined in `src/lib/triggers.ts`, each trigger specifies which departments receive it
