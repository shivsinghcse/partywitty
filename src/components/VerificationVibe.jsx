
import { Plus, Sparkles } from 'lucide-react'

const VerificationVibe = ({ onFinish }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-white/77 backdrop-blur-[100px] w-200 shadow-2xl rounded-2xl border border-gray-300 py-5 px-10">
        <div className='py-5 px-5 flex flex-col gap-5'>

          <div className='space-y-3'>
            <h2 className="font-[Lexend] text-5xl leading-5 tracking-[-1.2px] text-[#4F4F4F] align-middle font-medium">Show your vibe</h2>
            <p className="font-[Lexend] text-lg leading-5 tracking-normal text-[#4F4F4F] align-middle font-medium">
              Add up to 6 photos people will actually vibe with
            </p>
          </div>

          <div className='pt-2 flex flex-col gap-4'>
            <div className='flex justify-between items-center '>
              <h1 className='font-[Lexend] text-[14px] leading-5 tracking-[1.4px] text-[#3C3C3C] uppercase align-middle font-bold'>3/6 added</h1>
              <div className='px-4 flex-1'>
                <div className='relative h-1.5 bg-[#4F4F4F66] w-full rounded-full'>
                  <div className="absolute w-[60%] h-1.5 bg-[#3C3C3C]  rounded-full"></div>
                </div>
              </div>
            </div>

            <div className='p-2.25 rounded-4xl flex items-center gap-4 backdrop-blur-[20px] bg-[#4F4F4F4D]'>
              <div className='h-9.5 w-9.5 bg-[#4F4F4F33] p-2 rounded-full'>
                <Sparkles color='#3C3C3C' size={22} />
              </div>
              <p className='font-[Lexend] text-base leading-5 tracking-normal text-[#4F4F4F] uppercase align-middle font-semibold'>Profiles with 3+ photos get 3x more invites</p>
            </div>
          </div>
          

          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-300 rounded- flex flex-col items-center justify-center cursor-pointer rounded-md">
              <Plus className="w-6 h-6 text-gray-600 mb-1" />
              <span className="text-xs font-[Lexend] text-gray-500">Add Photo</span>
            </div>
            <img src="./images/vibe1.jpg" className="aspect-square rounded- object-cover rounded-md" />
            <img src="./images/vibe2.jpg" className="aspect-square rounded- object-cover rounded-md" />
            <img src="./images/vibe3.jpg" className="aspect-square rounded- object-cover rounded-md" />
            <div className="aspect-square bg-gray-300 rounded- flex flex-col items-center justify-center cursor-pointer rounded-md">
              <Plus className="w-6 h-6 text-gray-400 mb-1" />
              <span className="text-xs font-[Lexend] text-gray-500">Add Photo</span>
            </div>
            <div className="aspect-square bg-gray-300 rounded- flex flex-col items-center justify-center cursor-pointer rounded-md">
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
    </div>
  )
}

export default VerificationVibe