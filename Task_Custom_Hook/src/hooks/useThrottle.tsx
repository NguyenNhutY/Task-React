import { useState, useEffect, useRef } from 'react'


function useThrottle<T>(value: T, interval: number) {
  const last = useRef(0)
  const [state, setState] = useState(value)

  useEffect(() => {
    const now = Date.now()
    if (now - last.current >= interval) {
      last.current = now
      setState(value)
    }
  }, [value, interval])

  return state
}
