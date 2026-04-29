'use client'

import { useEffect } from 'react'

export function ErrorHandler() {
  useEffect(() => {
    // Handle browser extension errors that don't affect app functionality
    const handleError = (event: ErrorEvent) => {
      // Ignore common browser extension errors
      if (
        event.message?.includes('No Listener') ||
        event.message?.includes('tabs:outgoing.message.ready') ||
        event.message?.includes('Extension context invalidated') ||
        event.filename?.includes('chrome-extension://') ||
        event.filename?.includes('moz-extension://') ||
        event.filename?.includes('safari-extension://')
      ) {
        console.warn('Browser extension error ignored:', event.message)
        event.preventDefault()
        return true
      }
      return false
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // Ignore extension-related promise rejections
      if (
        event.reason?.message?.includes('No Listener') ||
        event.reason?.message?.includes('tabs:outgoing.message.ready') ||
        String(event.reason).includes('chrome-extension://') ||
        String(event.reason).includes('moz-extension://') ||
        String(event.reason).includes('safari-extension://')
      ) {
        console.warn('Browser extension promise rejection ignored:', event.reason)
        event.preventDefault()
        return true
      }
      return false
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}