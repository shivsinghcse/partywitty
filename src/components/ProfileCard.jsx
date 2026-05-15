import {Flame, XIcon, FlameIcon, HeartIcon, BadgeCheck} from 'lucide-react'
// import { useState } from 'react'

function ProfileCard({ profile, isActive, onGoTonight }) {
    // const [goTonight, setGoTonight] = useState(false)
  return (
    <div className=" relative w-115.5 h-183.5 rounded-[30px] flex flex-col gap-4.5 pb-5 backdrop-blur-[50px] overflow-hidden shadow-2xl">
      {/* Background image */}

      <div className='relative'>
        <img
            src={profile.img}
            alt='prfile-img'
            className="w-full h-162 object-cover rounded-[30px]"
        />

        {/* Top gradient + "Matches Your Vibe" */}
        <div className="absolute top-4 left-4 bg-linear-to-b from-black/10 to-transparent py-1 px-1.25 rounded-4xl backdrop-blur-lg border border-white/40">
            <div className="flex items-center gap-2 text-white text-[9px] font-[Lexend] align-middle tracking-normal capitalize ">
            <Flame className="w-4 h-4" />
            Matches Your Vibe
            </div>
        </div>

        
        <div className="absolute bottom-0 inset-x-0 rounded-b- overflow-hidden">
        {/* Gradient background layer */}
            <div className="absolute inset-0 bg-[linear-gradient(180.84deg,rgba(75,22,76,0)_16.81%,rgba(75,22,76,0.5)_47.69%,#0D030B_88.31%),linear-gradient(186.58deg,rgba(75,22,76,0.2)_55.94%,rgba(75,22,76,0.01)_24.79%)] rounded-b-[30px] rounded-t-[15px]" />

            {/* Content layer with padding */}
            <div className="relative px-5 pt-20 pb-6">
                <div className="flex items-end justify-between mb-1">
                <div className='flex items-center gap-2'>
                    <h3 className="text-white font-[Lexend] text-2xl font-semibold">
                    Shalini Singh, 28
                </h3>
                <BadgeCheck size={14} color="#fff" />
                </div>
                
                <button className="bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)] text-white px-4 py-2 rounded-full text-sm font-[Lexend] font-medium hover:cursor-pointer">
                    + Mate
                </button>
                </div>

                <p className="text-white/80 text-sm font-[Lexend] mb-3">4 Mutual Mates</p>

                {/* Tags */}
                <div className="flex gap-2">
                {['Bollywood Nights', 'Chill Crowd', 'Party Regular'].map(tag => (
                    <span key={tag} className="bg-black/40 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-full text-xs font-[Lexend]">
                    {tag}
                    </span>
                ))}
                </div>
            </div>
        </div>

        
      </div>
      
      

      <div>
        {/* Action buttons - only show on front card */}
            <div className=" absolute w-full flex justify-center gap-4">
            <button className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
                <XIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button className="bg-[linear-gradient(88.44deg,#7464E4_2.91%,#1A00D2_103.54%)] text-white px-8 py-4 rounded-full font-[Lexend] font-semibold flex items-center gap-2" onClick={() => onGoTonight(profile)}>
                <FlameIcon className="w-5 h-5" />
                Go Tonight
            </button>
            <button className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#FC4B6A]">
                <HeartIcon className="w-6 h-6 text-[#FC4B6A]" />
            </button>
            </div>
      </div>

    </div>
  )
}

export default ProfileCard


