import React, { useState } from 'react'

function Console() {
  const [counter, setCounter] = useState(1)
  const handleCount = () => {
    setCounter((prev) => prev + 1)
  }
  return (
    <div>
      {counter} <button onClick={handleCount}>+</button>
    </div>
  )
}

export default Console
