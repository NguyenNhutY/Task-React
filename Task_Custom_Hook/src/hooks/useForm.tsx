import { useState, ChangeEvent } from 'react'

function useForm<T extends object>(initial: T) {
  const [values, setValues] = useState(initial)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }))
  }

  return { values, onChange, setValues }
}
