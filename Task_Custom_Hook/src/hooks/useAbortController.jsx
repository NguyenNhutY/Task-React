

useEffect(() => {
  const controller = new AbortController()
  fetch(url, { signal: controller.signal })
  return () => controller.abort()
}, [url])
export default useAbortController