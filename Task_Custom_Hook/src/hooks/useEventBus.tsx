
import { useRef } from 'react'
type Handler = (payload: any) => void

function useEventBus() {
  const handlers = useRef(new Map<string, Handler[]>())

  const emit = (event: string, payload: any) => {
    handlers.current.get(event)?.forEach(h => h(payload))
  }

  const on = (event: string, handler: Handler) => {
    const list = handlers.current.get(event) ?? []
    handlers.current.set(event, [...list, handler])
  }

  return { emit, on }
}

export default useEventBus