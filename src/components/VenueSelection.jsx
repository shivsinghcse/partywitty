
import { Search, Mic, ArrowDown, MapPin, Star } from 'lucide-react'

const VenueSelection = ({ profile, onSelectVenue }) => {
  const venues = [
      { 
      id: 1, 
      name: 'F-Bar', 
      club: 'Nocturne Rooftop',
      location: 'Sector 38, Entertainment City • 1.5 km',
      tag1: 'Vibe Matches', 
      tag2: 'Happening Now', 
      img: './images/venue1.jpg',
      time: 'Friday 10:00 PM onwards'
    },
    { 
      id: 2, 
      name: 'F-Bar', 
      club: 'Nocturne Rooftop',
      location: 'Sector 38, Entertainment City • 1.5 km',
      tag1: 'Vibe Matches', 
      tag2: 'Happening Now', 
      img: './images/venue2.jpg',
      time: 'Friday 10:00 PM onwards'
    },
    { 
      id: 3, 
      name: 'F-Bar', 
      club: 'Nocturne Rooftop',
      location: 'Sector 38, Entertainment City • 1.5 km',
      tag1: 'Vibe Matches', 
      tag2: 'Happening Now',  
      img: './images/venue3.jpg',
      time: 'Friday 10:00 PM onwards'
    },
  ]

  return (
    <div className="p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-7.75 rounded-[20px] ">
        <div className="flex flex-col items-start gap-1.75 bg-white border border-gray-200 rounded-[20px] py-4 px-5 shadow-2xl flex-1">
          <span className="text-sm font-[Lexend] text-gray-600">Pick a plan you'd both enjoy</span>
          <div className="flex items-center gap-2">
            <img src={profile.img} className="w-8 h-8 rounded-full" />
            <span className="font-[Lexend] font-semibold">{profile.name}, {profile.age}</span>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <div className="w-17.25 h-17.25 p-0.75 bg-[linear-gradient(81.67deg,#7464E4_-0.79%,#1A00D2_89.7%)] rounded-full shadow-[0px_0px_24px_0px_#C229C01A]">
                <img
                    src="./images/profilephoto.png"
                    alt="profile-photo"
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
          <div className='flex flex-col'>
            <span className="font-[Lexend] text-[18px] text-[#4F4F4F] font-normal tracking-normal leading-6">Alen Markram</span>
            <button  className="bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)] py-1.75 px-2.5 rounded-full text-white text-sm font-[Lexend]">Get Verified</button>
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-[Lexend] text-[22px] text-[#070707] leading-[100%] tracking-normal font-normal">Tonight near you</h1>
        <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm">
          <Search className="w-5 h-5 text-[#070707]" />
          <input placeholder="Search..." className="outline-none font-[Lexend] text-sm placeholder:text-[#070707]" />
          <Mic className="w-5 h-5 text-[#070707]" />
        </div>
      </div>

      {/* Venue Cards */}
      <div className="grid grid-cols-3 gap-5">
        {venues.map((venue) => (
          <div key={venue.id} className="bg-white rounded- overflow-hidden shadow-lg rounded-xl" onClick={() => onSelectVenue(venue)}>
            <div className="relative">
              <img src={venue.img} className="w-full h-full object-cover" />
              <div>
                <div className="absolute top-4 left-4 bg-[#3CBD5333]/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-[Lexend]  text-[#3CBD53]">
                  {venue.tag2}
                  
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-[Lexend] text-[#FFFFFF]">
                 
                  {venue.tag1}
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent p-5 flex justify-between">
                <div>
                  <p className="text-white/80 text-xs font-[Lexend] mb-1">PRISM NIGHTCLUB</p>
                <div className='flex items-center gap-2 '>
                  <h3 className="text-white text-2xl font-[Lexend] font-bold">{venue.name}</h3>
                  <div className='flex items-center border gap-2 text-[17px] text-[#FACC15] py-1.25 px-2.5 bg-[#FFFFFF33] rounded-full border-white/30'>
                    <Star color='#FACC15' size={17}/>
                    <p className='text-[12px] font-medium'>4.5</p>
                  </div>
                </div>
                </div>
                <div className='flex flex-col justify-around -gap-4'>
                  <p className="text-white text-sm font-[Lexend]">Friday</p>
                  <p className="text-white text-sm font-[Lexend]">10:00 PM onwards</p>
                </div>
              </div>
            </div>
            <div className=" relative p-4 space-y-5">
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <MapPin />
                  <div className='flex flex-col gap-1.25'>
                    <h4 className="font-[Lexend] text-[14px] text-[#131B2E] font-semibold">Nocturne Rooftop</h4>
                    <p className="text-[#4F4F4F] text-[12px] font-[Lexend]">Sector 38, Entertainment City • 1.5 km</p>
                  </div>
                </div>
                <ArrowDown color='#4F4F4F'  size={18} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`./images/user${i}.png`} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F5] border border-[#9C9C9C] flex items-center justify-center text-xs font-[Lexend]">22+</div>
                </div>
                <div className='-ml-28 text-[12px] text-[#4F4F4F] font-normal font-[Lexend]'>Your Circle</div>
                <span className="text-[18px] font-normal text-[#008000] font-[Lexend]">
                  36% OFF F&B
                </span>
              </div>

                <div className='absolute -top-4 right-1/2 translate-x-1/2 flex items-center gap-2 py-1.5 px-2.5 bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)] rounded-full'>
                <img src="./images/user1.png" alt="user"  className='w-6 h-6 rounded-full object-cover'/>
                <p className='text-[#FFFFFF] text-[12px] font-[Lexend]'>Rahul has been here twice</p>
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  )
}

export default VenueSelection