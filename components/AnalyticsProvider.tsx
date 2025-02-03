"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-PQ24X4XHKJ", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null; 
