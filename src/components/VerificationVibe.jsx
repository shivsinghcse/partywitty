
import { Plus } from 'lucide-react'

const VerificationVibe = ({ onFinish }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded- w-full max-w- p-8">
        <h2 className="font-[Lexend] text-2xl font-bold mb-1">Show your vibe</h2>
        <p className="text-sm text-gray-600 font-[Lexend] mb-2">
          Add up to 6 photos people will actually vibe with
        </p>
        <p className="text-xs text-gray-400 font-[Lexend] mb-6">
          0/6 ADDED<br />
          <span className="text-gray-500">Profiles with 3+ photos get 3x more invites</span>
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="aspect-square bg-gray-100 rounded- flex flex-col items-center justify-center cursor-pointer">
            <Plus className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs font-[Lexend] text-gray-500">Add Photo</span>
          </div>
          <img src="./images/vibe1.jpg" className="aspect-square rounded- object-cover" />
          <img src="./images/vibe2.jpg" className="aspect-square rounded- object-cover" />
          <img src="./images/vibe3.jpg" className="aspect-square rounded- object-cover" />
          <div className="aspect-square bg-gray-100 rounded- flex flex-col items-center justify-center cursor-pointer">
            <Plus className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs font-[Lexend] text-gray-500">Add Photo</span>
          </div>
          <div className="aspect-square bg-gray-100 rounded- flex flex-col items-center justify-center cursor-pointer">
            <Plus className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs font-[Lexend] text-gray-500">Add Photo</span>
          </div>
        </div>

        <button 
          onClick={onFinish}
          className="w-full bg-gradient-to-r from-[#C229C0] to-[#FC4B6A] text-white py-4 rounded-full font-[Lexend] font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default VerificationVibe