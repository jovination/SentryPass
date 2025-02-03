"use client"

import { useEffect } from "react"
import { app } from "../firebaseConfig"
import { getAnalytics, logEvent } from "firebase/analytics"

export function FirebaseAnalytics() {
  useEffect(() => {
    const analytics = getAnalytics(app)
    logEvent(analytics, "page_view")
  }, [])

  return null
}

