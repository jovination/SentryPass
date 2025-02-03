"use client"

import { useEffect, useCallback } from "react"
import { logEvent } from "firebase/analytics"
import { initFirebase } from "../lib/firebase"

export function useFirebaseAnalytics() {
  useEffect(() => {
    const { analytics } = initFirebase()
    if (analytics) {
      logEvent(analytics, "page_view")
    }
  }, [])

  const logCustomEvent = useCallback((eventName: string, eventParams = {}) => {
    const { analytics } = initFirebase()
    if (analytics) {
      logEvent(analytics, eventName, eventParams)
    }
  }, [])

  return { logCustomEvent }
}

