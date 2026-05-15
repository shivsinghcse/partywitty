import { useEffect, useRef, useState } from 'react'
import { CircleX, Camera } from 'lucide-react'

const VerificationScan = ({ onComplete, onBack }) => {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: 720, height: 1280 },
          audio: false
        })
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error('Camera error:', err)
        setError('Camera access denied. Please allow camera permission.')
      }
    }

    startCamera()

    return () => {
      // Cleanup: stop camera when component unmounts
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  const handleCapture = () => {
    // Stop camera before moving on
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
    onComplete()
  }

  return (
    <div className="w-full h-screen bg-[#ECECEC99] flex items-center justify-center relative">
      <button
        onClick={onBack}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center hover:bg-black/70"
      >
        <CircleX className="w-6 h-6 text-white"/>
      </button>

      <div className="relative w-200 h-202 aspect-[9/16] bg-black overflow-hidden rounded-[350px] shadow-2xl border-4 border-[dodgerblue]">
        {error? (
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <p className="text-white font-[Lexend]">{error}</p>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover scale-x-[-1]" // mirror selfie
            />

            {/* Face outline guide */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-104 border-4 border-white rounded-[150px]" />
            </div>

            {/* Instructions */}
            <div className="absolute top-1/2 left-[70%] translate-x-[-115%] -translate-y-1/2 text-center pointer-events-none ">
              <p className="text-white font-[Lexend] font-semibold text-lg mb-2 drop-shadow-lg bg-white/30 backdrop-blur-2xl rounded-full">
                Look straight
              </p>
              <p className="text-white text-sm font-[Lexend] px-8 drop-shadow-lg">
                Keep your face within the frame. Ensure you have good light
              </p>
            </div>

            {/* Capture button */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <button
                onClick={handleCapture}
                className="bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)] p-1 rounded-full shadow-lg"
              >
                <div className="bg-white rounded-full p-4">
                  <Camera className="w-8 h-8 text-[#C229C0]" />
                </div>
              </button>
              <p className="text-white text-xs font-[Lexend] text-center mt-3 drop-shadow-lg">
                Tap to scan
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default VerificationScan