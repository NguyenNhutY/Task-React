import { useState, useEffect } from 'react'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading }
}
export default useFetch
