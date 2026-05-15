// components/VerificationIntro.jsx
import { X, CheckCircle } from 'lucide-react'

const VerificationIntro = ({ onStart, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="relative bg-white rounded- w-full max-w- p-8">
        <button onClick={onBack} className="absolute top-4 right-4">
          <X className="w-5 h-5 text-gray-400" />
        </button>
        
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>

        <h2 className="font-[Lexend] text-2xl font-bold text-center mb-2">You're one step away</h2>
        <p className="text-sm text-gray-600 font-[Lexend] text-center mb-6">
          Verify your profile to send this invite and connect with people around you.
        </p>

        <div className="space-y-3 mb-6">
          {[
            'Builds trust instantly',
            'Better chances she accepts',
            'Unlock special invites'
          ].map(text => (
            <div key={text} className="flex items-center gap-2 text-sm font-[Lexend]">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={onStart}
          className="w-full bg-gradient-to-r from-[#C229C0] to-[#FC4B6A] text-white py-4 rounded-full font-[Lexend] font-semibold mb-3"
        >
          Verify & Send Invite
        </button>
        <p className="text-xs text-gray-400 text-center font-[Lexend]">TAKES LESS THAN 60 SECONDS</p>
      </div>
    </div>
  )
}

export default VerificationIntro