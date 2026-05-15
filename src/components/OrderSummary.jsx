
import Logo from './icons/Logo'
import { useState } from 'react'
import { ArrowLeft, Star, MapPin, Shield, Ellipsis } from 'lucide-react'

const OrderSummary = ({ profile, venue, orderData, onBack }) => {
  const [agreed, setAgreed] = useState(false)
  const ticketPrice = 59
  const platformCharge = 5.90
  const grandTotal = ticketPrice + platformCharge + orderData.total

  console.log(orderData)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-[Lexend] text-sm font-medium">Back</span>
          </button>
          <div className="font-[Lexend] text-xl font-bold flex items-center gap-1">
            <Logo className='w-[194.6px] px-3.75' />
          </div>
        </div>

        <div className="bg-white rounded- shadow-xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-[Lexend] text-2xl font-bold flex items-center gap-2 mb-2">
                Illusion
                <span className="flex items-center gap-1 text-sm font-normal">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  4.1 Review (03)
                </span>
              </h2>
              <div className="flex items-center gap-3 mb-3">
                <img src={profile.img} className="w-27.5 h-27.5 rounded-full object-cover" />
                <div>
                  <p className="font-[Lexend] font-semibold">{profile.name}, {profile.age}</p>
                  <p className="text-sm text-gray-500 font-[Lexend]">{venue.club}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-[Lexend]">
                <MapPin className="w-4 h-4" />
                <span>Sector 38, Entertainment City • 13 km</span>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded- text-center">
              <p className="text-xs text-gray-500 font-[Lexend]">{new Date().toLocaleString('default', { month: 'short' })}</p>
              <p className="text-2xl font-[Lexend] font-bold">{new Date().getDate()}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-[Lexend] font-semibold">Tickets Price</span>
              <span className="font-[Lexend] font-bold">₹{ticketPrice.toFixed(2)}</span>
            </div>

            {orderData.drinks.map((drink, idx) => (
              <div key={idx} className="bg-gray-50 rounded- p-4 mb-3">
                <div className="flex gap-3">
                  <img src={drink.img} className="w-27.5 h-27.5 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-[Lexend] font-semibold">{drink.name}</h3>
                        <p className="text-xs text-gray-500 font-[Lexend]">{drink.desc}</p>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-[Lexend] mt-1 inline-block">
                          You only pay for the drink if they accept your invite
                        </span>
                      </div>
                      <span className="font-[Lexend] font-bold">₹{drink.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <h3 className="font-[Lexend] font-bold mb-3">Bill Details</h3>
            <div className="space-y-2 text-sm font-[Lexend]">
              <div className="flex justify-between">
                <span>Tickets Amount</span>
                <span>{ticketPrice}</span>
              </div>
              <div className="flex justify-between text-[#7464E4]">
                <span>Platform & Other Charges</span>
                <span>{platformCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Grand Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input 
              type="checkbox" 
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="terms" className="text-xs font-[Lexend] text-gray-600">
              I agree to the <span className="text-[#7464E4]">Terms of Service</span> and <span className="text-[#7464E4]">Privacy Policy</span>.
            </label>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-[#7464E4]">
            <Shield className="w-5 h-5 text-[#7464E4]" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-[#7464E4]">
            <Ellipsis className="w-5 h-5 text-[#7464E4] " />
            
          </button>
          <button 
            disabled={!agreed}
            className="bg-gradient-to-r from-[#7464E4] to-[#1A00D2] text-white px-12 py-4 rounded-full font-[Lexend] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
          >
            Make The Move Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary