// components/BuyDrinks.jsx
import { useState } from 'react'
import { MapPin, Clock, Edit, Check, Hand, Candy, Rose } from 'lucide-react'

const BuyDrinks = ({ profile, venue, onMakeTheMoveNow  }) => {
  const [selectedDrinks, setSelectedDrinks] = useState([])
  const [selectedGift, setSelectedGift] = useState(null)

  const drinks = [
    { id: 1, name: 'Dry Martini', desc: 'Mint, Lime, Electric Glow', price: 999, tag: 'MOST LIKELY TO GET ACCEPTED', img: './images/drink1.jpg' },
    { id: 2, name: 'Cosmopolitan', desc: 'Mint, Lime, Electric Glow', price: 1199, tag: 'Easy Choice', img: './images/drink2.jpg' },
    { id: 3, name: 'Mai Tai', desc: 'Mint, Lime, Electric Glow', price: 899, tag: 'Most Popular', img: './images/drink3.jpg' },
    { id: 4, name: 'Wine Glass', desc: 'Mint, Lime, Electric Glow', price: 2199, tag: 'Make An Impression', img: './images/drink4.jpg' },
  ]

  const gifts = [
    { id: 1, name: 'Wave', price: 'FREE', icon: <Hand color='#C229C0'/> },
    { id: 2, name: 'Send a Rose', price: 10, icon: <Rose color='#C229C0' /> },
    { id: 3, name: 'Chocolate', price: 25, icon: <Candy color='#C229C0' /> },
  ]

  const toggleDrink = (drinkId) => {
    setSelectedDrinks(prev => 
      prev.includes(drinkId) 
      ? prev.filter(id => id!== drinkId)
        : [...prev, drinkId]
    )
  }

  const totalPrice = selectedDrinks.reduce((sum, id) => {
    const drink = drinks.find(d => d.id === id)
    return sum + (drink?.price || 0)
  }, 0)

  const handleSubmit = () => { 
    const selectedDrinksData = drinks.filter(d => selectedDrinks.includes(d.id))
    const selectedGiftData = gifts.find(g => g.id === selectedGift)
    onMakeTheMoveNow(selectedDrinksData, selectedGiftData, totalPrice)
  }

  return (
    <div className="p-6 h-screen flex flex-col"> 
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-[Lexend]">Home / Party Package / Selected Item</p>
      </div>

      <div className="flex gap-6 flex-1 min-h-0"> {/* <- ADD flex-1 min-h-0 */}
        {/* Left Card */}
        <div className="w-[336px] flex flex-col gap-5 bg-white rounded- p-5 h-fit rounded-t-3xl"> {/* <- ADD h-fit */}
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

          <div className='relative rounded-3xl shadow-2xl'>
            <img src={venue.img} className="w-full h-[277px] object-cover rounded-t-3xl " />

          <div className=" text-white absolute bottom-20 flex items-center p-4 gap-2">
            <img src={profile.img} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-[Lexend] font-semibold text-sm">{profile.name}, {profile.age}</p>
              <p className="text-xs  font-[Lexend]">{venue.club}</p>
            </div>
          </div>

          <div className="space-y-2 p-4 text-sm font-[Lexend] text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Sector 38, Noida at ILLUSION</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Tonight, 10:30 PM</span>
            </div>
          </div>
          </div>
        </div>

        {/* Right Section - NOW SCROLLABLE */}
        <div className="flex-1 bg-white rounded- shadow-lg flex flex-col min-h-0"> 
          <div className="p-6 overflow-y-auto flex-1"> 
            <h2 className="font-[Lexend] text-[18px] font-normal mb-1">One Step Before Your First Move</h2>
            <p className="text-gray-600 text-[12px] font-[Lexend] mb-6">Verify your profile to send invites and offer drinks.</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {drinks.map(drink => {
                const isSelected = selectedDrinks.includes(drink.id)
                return (
                  <div
                    key={drink.id}
                    onClick={() => toggleDrink(drink.id)}
                    className={`relative border-2 rounded-[20px] p-1 cursor-pointer transition-all ${
                      isSelected? 'border-[#C229C0] shadow-lg bg-[#C229C0]/5' : 'border-gray-200'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#C229C0] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="flex gap-3">
                      <img src={drink.img} className="w-20 h-20 rounded-tl-[20px] rounded-bl-[20px] object-cover " />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="font-[Lexend] font-semibold">{drink.name}</h3>
                          <span className="absolute top-0 right-0 bg-linear-to-r from-[#C229C0] to-[#FC4B6A] text-white text-xs px-3 py-1 rounded-tr-[13px] rounded-br-[11px] rounded-bl-[13px]">₹{drink.price}</span>
                        </div>
                        <p className="text-xs text-gray-500 font-[Lexend] mb-2">{drink.desc}</p>
                        <span className="text-[10px] bg-green-100 text-green-normal px-2 py-0.5 rounded-full font-[Lexend]">{drink.tag}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {selectedDrinks.length > 0 && (
              <div className="bg-[#F5F3FF] rounded- p-3 mb-6 flex items-center justify-between">
                <span className="font-[Lexend] font-semibold text-sm">{selectedDrinks.length} drink{selectedDrinks.length > 1? 's' : ''} selected</span>
                <span className="font-[Lexend] font-bold text-lg">₹{totalPrice}</span>
              </div>
            )}

            <div className="flex items-center justify-center gap-4 mb-6">
              {gifts.map(gift => (
                <div
                  key={gift.id}
                  onClick={() => setSelectedGift(gift.id)}
                  className={`flex-1 border-2 rounded- p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center ${
                    selectedGift === gift.id? 'border-[#C229C0]' : 'border-gray-200'
                  }`}
                >
                  
                   {gift.icon}
                  
                  <p className="font-[Lexend] font-semibold text-sm mb-1">{gift.name}</p>
                  <p className="text-xs text-gray-500 font-[Lexend]">{gift.price === 'FREE'? 'FREE' : `₹${gift.price}`}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-sm font-[Lexend] font-semibold mb-2">A Little About Me</p>
              <div className="flex items-center justify-between border border-gray-200 rounded- px-4 py-3">
                <p className="text-sm text-gray-600 font-[Lexend]">Hey, I'm Aman, into good music and chill nights</p>
                <Edit className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* STICKY BUTTON AT BOTTOM */}
          <div className="p-6 pt-0 border-t border-gray-100">
            <button 
              onClick={handleSubmit}
              disabled={selectedDrinks.length === 0}
              className="border w-full bg-linear-to-r from-[#7464E4] to-[#1A00D2] text-white py-4 rounded-full font-[Lexend] font-semibold disabled:opacity-50 disabled:cursor-not-allowed "
            >
              Make The Move Now {selectedDrinks.length > 0 && `(₹${totalPrice})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyDrinks