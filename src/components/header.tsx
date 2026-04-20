export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight">DIVA</h1>
            <p className="text-[10px] text-muted uppercase tracking-widest">
              UNCS Intelligence
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* WHY: Placeholder avatar — will be replaced with Microsoft SSO profile photo */}
          <div className="w-8 h-8 rounded-full bg-card border border-card-border flex items-center justify-center text-xs font-medium text-muted">
            JG
          </div>
        </div>
      </div>
    </header>
  );
}
