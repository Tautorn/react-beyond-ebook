import React, { useEffect, useState } from 'react'

const Twitter = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffects(() => {
    window.setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
            <div>Hello Twitter</div>
          )
      }
    </div>
  )
}

export default Twitter