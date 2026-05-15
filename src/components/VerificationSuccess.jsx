
import { CheckCircle, Sparkles, Heart } from 'lucide-react'

const VerificationSuccess = ({ onContinue }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded- w-200 h-[648px] shadow-2xl rounded-2xl p-8 flex flex-col items-center justify-center">

        <div className='w-112 py-10 px-6 text-center'>
          <div className="relative w-64 h-64 mx-auto border border-gray-200  rounded-full bg-[#3E3E3E0D] flex items-center justify-center shadow-2xl">
            <div className='w-[177.33px] h-[177.33px]  absolute top-[35%] left-[35%] -translate-x-1/2 -translate-y-1/2  rounded-full bg-[#3E3E3E0D] border border-black/10 flex flex-col justify-center items-center relative p-6'>
              <img src="./images/user.png" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute top-6 right-6 bg-[#7464E4]/50 rounded-full p-2">  
              <Sparkles className="w-6 h-6 text-[#7464E4] fill-white"/>
            </div>
            <div className="absolute bottom-6 left-6 bg-[#7464E4]/50 rounded-full p-2">  
              <Heart className="w-6 h-6 text-[#7464E4] fill-white"/>
              
            </div>
            <div className="absolute top-[80%] right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#7464E4]/50 rounded-full py-1 px-4 text-white bg-[#008000]/50">  
              verified
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
    </div>
  )
}

export default VerificationSuccess