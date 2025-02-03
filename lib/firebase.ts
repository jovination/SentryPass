import { initializeApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBuxaOng2np7BrJA_vl3ZFQvskjx0GgeyU",
  authDomain: "sentrypasskey.firebaseapp.com",
  projectId: "sentrypasskey",
  storageBucket: "sentrypasskey.firebasestorage.app",
  messagingSenderId: "834239956344",
  appId: "1:834239956344:web:8370479c7194cf38e3b48d",
  measurementId: "G-PQ24X4XHKJ",
}

let app
let analytics

if (!getApps().length) {
  app = initializeApp(firebaseConfig)
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app)
  }
}

export { app, analytics }

