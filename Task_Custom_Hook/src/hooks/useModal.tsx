
import { useState } from 'react'

function useModal() {
  const [open, setOpen] = useState(false)
  return {
    open,
    show: () => setOpen(true),
    hide: () => setOpen(false)
  }
}
export default useModal