
import { CircleX, CheckCircle, Smile, BadgeCheck } from 'lucide-react'

const VerificationIntro = ({ onStart, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white/70 backdrop-blur-[100px] rounded-lg w-200 py-8 px-8 shadow-2xl border border-gray-200 flex flex-col items-center gap-5">
        <button
              onClick={onBack}
              className="absolute top-2 right-2 z-20 w-8 h-8 bg-[#E8E6F5] rounded-full flex items-center justify-center hover:cursor-pointer"
        >   
          <CircleX className="w-6 h-6 text-[#7464E4]"/>
        </button>
        
        <div className="flex flex-col gap-5 py-5 justify-center items-center  w-127.5 ">

          <div className='flex flex-col gap-5'>
            <div className="relative w-70 h-52.5 border-2 border-dashed border-[#4F4F4F4D] rounded-[48px] flex items-center justify-center">
              <div className="w-38.75 h-51.5 border-4 border-[#4F4F4F] rounded-full flex items-center justify-center">
                <Smile size={60} color='#4F4F4F' />
              </div>
              <button className='absolute -top-2 -right-2 w-9.5 h-9.5 flex items-center justify-center rounded-full bg-[#2B183466]'>
                <BadgeCheck size={18} color='#4F4F4F'/>
              </button>
            </div>

          </div>

          <div className='px-2 flex flex-col gap-5'>
            <h2 className="font-[Lexend] text-2xl font-semibold leading-[100%] tracking-[-1.2px] text-center align-middle text-[#4F4F4F]">You're one step away</h2>
            <p className="text-lg font-medium leading-[100%] tracking-normal text-[#4F4F4F] font-[Lexend] text-center">
              Verify your profile to send this invite and connect with people around you.
            </p>
          </div>  
        </div>

        

        <div className="flex px-2 pb-2 gap-4 justify-between w-full">
          {[
            'Builds trust instantly',
            'Better chances she accepts',
            'Unlock special invites'
          ].map(text => (
            <div key={text} className="flex items-center gap-2 text-base font-medium tracking-normal leading-[100%] text-[#4F4F4F] font-[Lexend]">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={onStart}
          className="w-fit  bg-gradient-to-r from-[#C229C0] to-[#FC4B6A] text-white py-3.5 px-24 leading-[100%] tracking-normal text-center align-middle rounded-full hover:cursor-pointer font-[Lexend] font-normal"
        >
          Verify & Send Invite
        </button>
        <p className="text-[12.5px] font-medium tracking-normal leading-[16.5px] align-middle uppercase text-[#4F4F4F] text-center font-[Lexend]">TAKES LESS THAN 60 SECONDS</p>
      </div>
    </div>
  )
}

export default VerificationIntro