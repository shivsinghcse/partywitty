import { Eye, Wine, CircleCheckBig, CircleCheck  } from 'lucide-react';
// import {Link} from 'react-router-dom'

const GetVerified = ({ onGetVerified }) => {

    const steps = [
        {
            image: './images/steps.jpg', 
            step: 1,
            icon: <Eye />,
            title: 'Spot Your Person',
            description: 'Pick someone you’d genuinely enjoy going out with.'
        },
        {
            image: './images/steps.jpg', 
            step: 2,
            icon: <Wine />,
            title: 'Send a Drink',
            description: 'Offer their first drink your way of saying let’s go out.'
        },
        {
            image: './images/steps.jpg', 
            step: 3,
            icon: <CircleCheckBig />,
            title: 'They Accept → You’re Set',
            description: 'Once accepted, it’s a confirmed plan. No endless chatting.'
        },
    ]

    const list = ['Get noticed faster', 'Higher chances your invite gets accepted', 'Unlock drink invites & premium interactions', 'Build trust with every profile visit']
  return (
    <div className=" rounded-xl border border-gray-200 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.12)] flex flex-col gap-3.5 px-5 py-2.5 bg-white/30 backdrop-blur-">

        <div className="flex flex-col items-center gap-1.75">
            <div className="w-25 h-25 p-0.75 bg-[linear-gradient(81.67deg,#7464E4_-0.79%,#1A00D2_89.7%)] rounded-full shadow-[0px_0px_24px_0px_#C229C01A]">
                <img
                    src="./images/profilephoto.png"
                    alt="profile-photo"
                    className="w-full h-full rounded-full object-cover"
                />
            </div>

            <h1 className="font-[Lexend] font-medium text-[18px] text-black text-center align-middle tracking-normal leading-6 ">Make Your First Move </h1>
            <p className="font-[Lexend] font-normal text-[14px] leading-[100%] tracking-normal text-center align-middle text-[#4F4F4F]">Verify your profile to start sending invites and offering drinks.</p>
        </div>

        <div className="border border-[#85858517]"></div>

        <div className="flex flex-col gap-4.25">
            <h1 className="capitalize font-[Lexend] font-medium text-[18px] text-black  align-middle tracking-normal leading-6 ">How it works</h1>

            {
                steps.map((step) => {
                    return (
                        <div className='flex backdrop-blur-[50px]' key={step.step}>
                            <div className='w-21.5 h-27 overflow-hidden'>
                                <img src={step.image} alt="person-image" className='w-full h-full rounded-[18px] object-cover'/>
                            </div>
                            <div className='flex flex-col gap-2.25 py-2.75 px-2.5'>
                                <div className='flex gap-2.25'>
                                    <div className='flex items-center justify-center w-6 h-6 rounded-full py-1.75 px-3.25 bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)]'>
                                        <h1 className='font-[Lexend] font-medium text-[14px] text-white tracking-normal leading-[100%] align-middle'>{step.step}</h1>
                                    </div>
                                    {step.icon}
                                </div>
                                <h2 className='capitalize font-[Lexend] font-medium text-[16px] text-[#4F4F4F] tracking-normal leading-[100%]'>{step.title}</h2>
                                <p className='font-[Lexend] font-normal text-[12px] text-[#4F4F4F]/80 tracking-normal leading-[100%] align-middle'>{step.description}</p>
                            </div>
                        </div>
                    )
                })
            }

            
            
        </div>

        <div className="border border-[#85858517]"></div>

        <div className=' flex flex-col gap-3 p-2 pt-0'>
            
                {
                    list.map((item, index) => {
                        return (
                            <div className='flex gap-2.5 items-center' key={index}>
                                <div className='w-6 h-6 rounded-full bg-[#3CBD5333] flex items-center justify-center'>
                                    <CircleCheck size={13.33} color='#3CBD53'/>
                                </div>
                                <h1 className='font-[Lexend] font-normal text-[14px] text-[#4F4F4F] text-center align-middle tracking-normal leading-[100%]'>{item}</h1>
                            </div>
                        )
                    })
                }
            
        </div>

        <div className="border border-[#85858517]"></div>

        <div className='flex flex-col justify-center items-center gap-3.75'>
            <button className='py-3.5 px-7.5 rounded-4xl w-full bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)]   font-[Lexend] font-normal text-[18px] text-[#ffffff] align-middle text-center tracking-normal leading-6 hover:cursor-pointer' onClick={onGetVerified}>Get Verified</button>

            <p className='font-[Lexend] font-normal text-[14px] text-[#4F4F4F] align-middle tracking-normal leading-[100%] hover:cursor-pointer'>Takes less than 60 seconds</p>

            <a to='#' className='underline font-[Lexend] font-normal text-[14px] text-[#4F4F4F] align-middle tracking-normal leading-[100%] hover:cursor-pointer'>Maybe later</a>

        </div>
        
    </div>
  )
}

export default GetVerified