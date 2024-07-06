import { useState, useEffect, useCallback } from 'react'

const useService = (serviceFunction, initialPayload = null) => {
  const [payload, setPayload] = useState(initialPayload)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const callService = useCallback(async () => {
    if (!serviceFunction || !payload) {
      console.warn('Service function or payload is missing')
      return
    }

    setLoading(true)
    setError(null)

    try {
      console.log('Calling service with payload:', payload)
      const response = await serviceFunction(payload)
      console.log('Service response:', response)

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      const result = await response.json()
      console.log('Parsed result:', result)
      setData(result)
    } catch (error) {
      console.error('Service call error:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [serviceFunction, payload])

  useEffect(() => {
    callService()
  }, [callService])

  const setNewPayload = (newPayload) => {
    console.log('Setting new payload:', newPayload)
    setPayload(newPayload)
  }

  return { data, error, loading, setNewPayload }
}

export default useService
