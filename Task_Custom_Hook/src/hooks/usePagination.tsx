
import { useState } from 'react'

function usePagination(total: number, pageSize: number) {
  const [page, setPage] = useState(1)
  const maxPage = Math.ceil(total / pageSize)
  return { page, maxPage, setPage }
}
export default usePagination