
import { useState } from 'react'
function useCommand<T>(command: () => Promise<T>) {
  const [loading, setLoading] = useState(false)

  const execute = async () => {
    setLoading(true)
    try { return await command() }
    finally { setLoading(false) }
  }

  return { execute, loading }
}
export default useCommand
