import { useState } from 'react'

const HelloWorld = () => {
  const [helloData, setHelloData] = useState({
    text: 'Hello World',
    effect: '',
    color: 'text-gray-800'
  })
  const [isLoading, setIsLoading] = useState(false)

  // You can change this URL to your deployed backend URL
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  const fetchHelloWorld = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API_URL}/api/hello`)
      const data = await response.json()
      
      if (data.success) {
        setHelloData(data.data)
        
        // Clear the effect after animation completes
        setTimeout(() => {
          setHelloData(prev => ({ ...prev, effect: '' }))
        }, 1000)
      }
    } catch (error) {
      console.error('Error fetching hello world:', error)
      // Fallback to local random effect if API fails
      const localEffects = [
        { text: "Hello World", effect: "bounce", color: "text-blue-500" },
        { text: "Hello World", effect: "shake", color: "text-red-500" },
        { text: "Hello World", effect: "pulse", color: "text-green-500" },
        { text: "Hello World", effect: "spin", color: "text-purple-500" }
      ]
      const randomEffect = localEffects[Math.floor(Math.random() * localEffects.length)]
      setHelloData(randomEffect)
      
      setTimeout(() => {
        setHelloData(prev => ({ ...prev, effect: '' }))
      }, 1000)
    } finally {
      setIsLoading(false)
    }
  }

  const getAnimationClass = (effect) => {
    const animations = {
      bounce: 'animate-bounce-custom',
      shake: 'animate-shake',
      pulse: 'animate-pulse-custom',
      spin: 'animate-spin-custom',
      fade: 'animate-fade',
      scale: 'animate-scale',
      flip: 'animate-flip',
      glow: 'animate-glow'
    }
    return animations[effect] || ''
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="mb-8">
        <h1 
          className={`text-4xl md:text-6xl font-bold transition-all duration-300 ${helloData.color} ${getAnimationClass(helloData.effect)}`}
        >
          {helloData.text}
        </h1>
      </div>
      
      <button
        onClick={fetchHelloWorld}
        disabled={isLoading}
        className={`
          px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200
          ${isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95'
          }
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `}
      >
        {isLoading ? 'Loading...' : 'Click for Magic!'}
      </button>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>Click the button to see random effects!</p>
      </div>
    </div>
  )
}

export default HelloWorld