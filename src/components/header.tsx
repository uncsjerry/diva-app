export default function Header() {
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
        <div className="flex items-center gap-3">
          {/* WHY: Placeholder avatar — will be replaced with Microsoft SSO profile photo */}
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold text-white">
            JG
          </div>
        </div>
      </div>
    </header>
  );
}
