
import { BadgeCheck, Sparkles, Heart } from 'lucide-react'

const VerificationSuccess = ({ onContinue }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded- w-200 h-[648px] shadow-2xl rounded-2xl p-8 flex flex-col items-center justify-center">

        <div className='w-112 py-10 px-6 text-center space-y-5.25'>
          <div className="relative w-64 h-64 mx-auto border border-gray-200  rounded-full bg-[#3E3E3E0D] flex items-center justify-center shadow-2xl">
            <div className='w-[177.33px] h-[177.33px]  absolute top-[35%] left-[35%] -translate-x-1/2 -translate-y-1/2  rounded-full bg-[#3E3E3E0D] border border-black/10 flex flex-col justify-center items-center relative p-6'>
              <img src="./images/user.png" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute top-6 right-0 bg-[#7464E4]/50 rounded-full p-2">  
              <Sparkles className="w-6 h-6 text-[#7464E4] fill-white"/>
            </div>
            <div className="absolute bottom-6 left-0 bg-[#7464E4]/50 rounded-full p-2">  
              <Heart className="w-6 h-6 text-[#7464E4] fill-white"/>
              
            </div>
            <div className="absolute top-[65%] right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full py-[5.33px] px-[10.67px] text-white bg-[#008000] flex justify-between items-center gap-1">  
              <BadgeCheck size={14}/>
              <p className='font-mono font-bold text-[12px] leading-[13.33px] tracking-[0.23px]'>verified</p>
            </div>
          </div>

          <div className='px-2 space-y-[15.13px]'>
            <h2 className="font-[Lexend] text-5xl font-medium leading-12 tracking-[-1.2px] text-center align-middle text-[#4F4F4F]">You're verified</h2>
            <p className="font-[Lexend] text-lg font-medium leading-[29.25px] tracking-normal text-center align-middle text-[#4F4F4F]">
              No fake vibes here. You’re almost in 
            </p>
            <div className='space-y-1.5 text-center  flex flex-col items-center'>
              <div className='relative h-2 w-[70%] bg-gray-400 rounded-full'>
                <div className='absolute h-2 w-[89%] bg-green-800 rounded-full'></div>
              </div>
              <p className="font-[Lexend] text-[12px] font-medium leading-[15px] tracking-[1px] align-middle text-[#4F4F4F]">Identity match 89.4%</p>
            </div>
          </div>

          <button 
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-[#7464E4] to-[#1A00D2] text-white py-4.5 px-5 rounded-full font-[Lexend] font-normal hover:cursor-pointer"
          >
            Go to Dashboard
          </button>
          <p className="font-[Lexend] text-[12px] font-medium leading-[100%] tracking-normal text-center align-middle text-[#4F4F4F]">
              No fake vibes here. You’re almost in 
          </p>
        </div>        
      </div>
    </div>
  )
}

export default VerificationSuccess