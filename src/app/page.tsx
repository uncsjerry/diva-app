import Header from "@/components/header";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-4">
        <Dashboard />
      </main>
      <footer className="border-t border-card-border py-3 text-center">
        <p className="text-[10px] text-muted uppercase tracking-widest">
          DIVA &middot; UNCS Internal &middot; v0.1.0
        </p>
      </footer>
    </>
  );
}
