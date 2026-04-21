import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import Header from "@/components/header";
import Dashboard from "@/components/dashboard";
import AdminBar from "@/components/admin-bar";

interface HomeProps {
  searchParams: Promise<{ as?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const session = await getSession();
  if (!session) redirect("/login");

  const params = await searchParams;

  // Determine which feed to show
  // Admin default: all notifications. ?as=email narrows to that user.
  let viewAs: string;
  if (session.isAdmin) {
    viewAs = params.as ?? "all";
  } else {
    viewAs = session.email;
  }

  return (
    <>
      <Header session={session} />
      {session.isAdmin && <AdminBar session={session} viewAs={viewAs} />}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-4">
        <Dashboard viewAs={viewAs} />
      </main>
      <footer className="border-t border-card-border py-3 text-center">
        <p className="text-[10px] text-accent/50 uppercase tracking-widest font-medium">
          DIVA &middot; UNCS Internal &middot; v0.1.0
        </p>
      </footer>
    </>
  );
}
