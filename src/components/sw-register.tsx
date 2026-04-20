"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // WHY: SW registration can fail in some dev environments — safe to ignore
      });
    }
  }, []);

  return null;
}
