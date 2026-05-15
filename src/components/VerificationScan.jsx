// components/VerificationScan.jsx
import { useEffect } from 'react'
import { X } from 'lucide-react'

const VerificationScan = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete() // auto-complete after 3s for demo
    }, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative">
      <button className="absolute top-6 right-6 z-20">
        <X className="w-6 h-6 text-white" />
      </button>
      
      <div className="relative w-full max-w- aspect-[9/16] bg-gradient-to-br from-teal-900 to-cyan-900 rounded- overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-80 border-4 border-white/30 rounded-" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-white font-[Lexend] font-semibold mb-2">Look straight</p>
          <p className="text-white/80 text-sm font-[Lexend] px-8">
            Keep your face within the frame. Ensure you have good light for the scan to work
          </p>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-[Lexend]">
            10 seconds for selfie scan
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationScan