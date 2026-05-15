
import { CheckCircle } from 'lucide-react'

const VerificationSuccess = ({ onContinue }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded- w-full max-w- p-8 text-center">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
          <img src="./images/user.jpg" className="w-28 h-28 rounded-full object-cover" />
          <div className="absolute -bottom-1 -right-1 bg-[#7464E4] rounded-full p-2">
            <CheckCircle className="w-6 h-6 text-white fill-white" />
          </div>
        </div>

        <h2 className="font-[Lexend] text-2xl font-bold mb-2">You're verified</h2>
        <p className="text-sm text-gray-600 font-[Lexend] mb-6">
          No fake vibes here. This is about to<br />connect with her
        </p>

        <button 
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-[#7464E4] to-[#1A00D2] text-white py-4 rounded-full font-[Lexend] font-semibold mb-3"
        >
          Go to Dashboard
        </button>
        <p className="text-xs text-gray-400 font-[Lexend]">She will see you're verified</p>
      </div>
    </div>
  )
}

export default VerificationSuccess