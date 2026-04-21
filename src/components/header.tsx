"use client";

import { useRouter } from "next/navigation";
import { UserSession } from "@/lib/types";

interface HeaderProps {
  session: UserSession;
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Header({ session }: HeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 bg-accent shadow-sm">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white">DIVA</h1>
            <p className="text-[10px] text-white/60 uppercase tracking-widest">
              UNCS Intelligence
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-medium text-white leading-none">{session.name}</p>
            <p className="text-[10px] text-white/60 mt-0.5">{session.role}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold text-white">
            {initials(session.name)}
          </div>
          <button
            onClick={handleLogout}
            className="text-[10px] text-white/60 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/10"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
