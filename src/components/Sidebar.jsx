import Logo from './icons/Logo'
import SidebarToggleIcon from './icons/SidebarToggleIcon'
import MyPlanIcon from './icons/MyPlanIcon'
import ChatRoomIcon from './icons/ChatRoomIcon'
import MyBidsIcon from './icons/MyBidsIcon'
import MyBookingIcon from './icons/MyBookingIcon'
import SearchIcon from './icons/SearchIcon'
import NotificationIcon from './icons/NotificationIcon'
import SaveIcon from './icons/SaveIcon'
import RewardIcon from './icons/RewardsIcon'
import MoreIcon from './icons/MoreIcon'
import {menus} from '../lib/data/mockData'
import { ArrowUpRight } from 'lucide-react';


const Sidebar = () => {

    const iconMap = {
        MyPlanIcon: MyPlanIcon,
        MyBidsIcon: MyBidsIcon,
        MyBookingIcon: MyBookingIcon,
        SearchIcon: SearchIcon,
        ChatRoomIcon: ChatRoomIcon,
        NotificationIcon: NotificationIcon,
        SaveIcon: SaveIcon,
        RewardIcon: RewardIcon,
    }
  
  return (
    <div className="fixed top-0 left-0 w-77.5 backdrop-blur-[100px] bg-[#F1F1F1]/28 h-screen pt-7.5 shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)]">
        <div className='px-5 flex flex-col gap-5'>
            <div className='flex justify-between items-center gap-2.5'>

                <Logo className='w-[194.6px] px-3.75' />

                <button className='w-8.5 h-8.5 rounded-full flex items-center justify-center bg-[#C5C0E5] hover:cursor-pointer' onClick={()=>alert()}>
                    <SidebarToggleIcon className='w-4.75 h-[15.83px] text-[#7464E4]'/>
                </button>
            </div>

            <div className='flex flex-col gap-3.75'>

                {
                    menus.map((menu, i) => {
                        const Icon = iconMap[menu.icon]
                        return (
                            <div key={i} className=' px-3.75 py-2.5 flex justify-between hover:rounded hover:cursor-pointer hover:bg-[#C5C0E5]/40 transition'>

                                <div className='flex items-center gap-1.5'>
                                    <Icon className='w-7.5 h-7.5 py-0.5 px-1.25 text-[#070707]'/>
                                    <label className='text-[#070707] text-[18px] font-normal font-[Lexend]'>{menu.label}</label>
                                </div>
                                <div className='p-2'></div>

                            </div>
                        )
                    })
                }
                
            </div>
        </div>

        <div className='fixed bottom-0 left-0 w-full flex flex-col gap-2 p-2.5 bg-linear-to-r from-[#7464E4]/20 to-[#B5A78B]/10 backdrop-blur-[100px]'>

            <button className='group flex items-center justify-between py-1  px-1 hover:cursor-pointer'>
                <div className='flex gap-4 items-center'>
                    <MoreIcon className='w-5 h-4 text-black group-hover:cursor-pointer' />
                    <label className='font-[Lexend] text-[18px] font-normal group-hover:cursor-pointer'>More</label>
                </div>
            </button>

            <div className=' flex gap-2 p-2 bg-[linear-gradient(263.53deg,#151521_0%,#151724_25.08%,#063A50_51.11%,#07384C_64.27%,#141420_97.72%)]'>
                <img src="./images/crown.png" alt="" className='w-[42.01px]' />
                <div className='flex flex-col gap-0.75'>
                    <label className='font-[Lexend] font-normal text-[11px] leading-3.5 tracking-[0%] text-[#FFFFFF]'>Corporate Employee Offer</label>
                    <label className='font-[Lexend] font-semibold text- leading-none tracking-normal capitalize bg-linear-to-r from-[#F8E2B9] to-[#9D7827] bg-clip-text text-transparent'>1 Month for ₹1</label>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <img src="./images/user.png" alt="user-image" className='w-9 h-9 rounded-full object-cover' />
                    <div className='flex flex-col gap-1 justify-center'>
                        <label className="font-[Lexend] font-normal text- leading-none tracking-[-0.02em] align-middle">Zeeshan Ahmad</label>
                        <label className='p-0.75 font-[Lexend] font-normal text-[10px] leading-none tracking-[0%] capitalize text-[#4F4F4F]'>Indus Global Pvt Ltd Admin</label>
                    </div>
                </div>
                
                <ArrowUpRight size={16}/>
                
            </div>
        </div>
    </div>
  )
}

export default Sidebar