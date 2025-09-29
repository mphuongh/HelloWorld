import { useState } from 'react'
import HelloWorld from './components/HelloWorld'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <HelloWorld />
      </div>
    </div>
  )
}

export default App