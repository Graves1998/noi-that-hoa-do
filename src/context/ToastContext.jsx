import { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = useCallback((message, duration = 2800) => {
    setToast({ visible: true, message })
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), duration)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: 'fixed', bottom: 28, left: '50%',
          transform: `translateX(-50%) translateY(${toast.visible ? 0 : 16}px)`,
          background: 'var(--bg-dark)', color: '#fff',
          padding: '10px 22px', borderRadius: 30,
          fontSize: '.82rem', fontWeight: 500,
          opacity: toast.visible ? 1 : 0,
          pointerEvents: 'none', whiteSpace: 'nowrap',
          transition: 'opacity .25s var(--ease), transform .28s var(--ease)',
          zIndex: 9999,
        }}
      >
        {toast.message}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
