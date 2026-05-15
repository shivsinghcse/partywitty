import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import { CircleX } from 'lucide-react';
import VenueSelection from "./components/VenueSelection"
import BuyDrinks from "./components/BuyDrinks"
import OrderSummary from "./components/OrderSummary"
import VerificationIntro from "./components/VerificationIntro" 
import VerificationScan from "./components/VerificationScan" 
import VerificationSuccess from "./components/VerificationSuccess" 
import VerificationVibe from "./components/VerificationVibe" 
import { BadgeCheck } from 'lucide-react';


const App = () => {
  const [goTonight, setGoTonight] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [currentView, setCurrentView] = useState('feed')
  const [selectedVenue, setSelectedVenue] = useState(null)
  const [orderData, setOrderData] = useState(null)
  const [isVerified, setIsVerified] = useState(false)

  const handleGoTonight = (profile) => { 
    setSelectedProfile(profile)
    setGoTonight(true)
  }

  const handleMakeYourMove = () => { 
    setGoTonight(false) 
    setCurrentView('venues') 
  }

  const handleSelectVenue = (venue) => { 
    setSelectedVenue(venue)
    setCurrentView('drinks')
  }

  const handleMakeTheMoveNow = (drinks, gift, total) => { 
    setOrderData({ drinks, gift, total })
    setCurrentView('order')
  }

  const handleBack = () => {
    if (currentView === 'order') setCurrentView('drinks')
    else if (currentView === 'drinks') setCurrentView('venues')
    else if (currentView === 'venues') setCurrentView('feed')
    else if (currentView === 'verify-intro') setCurrentView('feed')
    else setCurrentView('feed') 
  }

  const handleGetVerified = () => { 
    setCurrentView('verify-intro')
  }

  const handleStartVerification = () => { 
    setCurrentView('verify-scan')
  }

  const handleVerificationComplete = () => { 
    setIsVerified(true)
    setCurrentView('verify-success')
  }

  const handleShowVibe = () => { 
    setCurrentView('verify-vibe')
  }

  const handleFinishVerification = () => { 
    setCurrentView('feed') 
  }

  return (
    <div className="flex gap-10 h-screen">
      <Sidebar />
      <div className="ml-80 flex-1 overflow-hidden">
       {currentView === 'feed' && <Main onGoTonight={handleGoTonight} onGetVerified={handleGetVerified} />}
        {currentView === 'venues' && (
          <VenueSelection 
            profile={selectedProfile} 
            onSelectVenue={handleSelectVenue}
            onGetVerified={handleGetVerified} 
          />
        )}
        {currentView === 'drinks' && (
          <BuyDrinks 
            profile={selectedProfile} 
            venue={selectedVenue}
            onMakeTheMoveNow={handleMakeTheMoveNow}
            onGetVerified={handleGetVerified} 
            isVerified={isVerified}
          />
        )}
        {currentView === 'order' && (
          <OrderSummary 
            profile={selectedProfile}
            venue={selectedVenue}
            orderData={orderData}
            onBack={handleBack}
          />
        )}
        {currentView === 'verify-intro' && (
          <VerificationIntro 
            onStart={handleStartVerification}
            onBack={() => setCurrentView('feed')}
          />
        )}
        {currentView === 'verify-scan' && (
          <VerificationScan onComplete={handleVerificationComplete} />
        )}
        {currentView === 'verify-success' && (
          <VerificationSuccess onContinue={handleShowVibe} />
        )}
        {currentView === 'verify-vibe' && (
          <VerificationVibe onFinish={handleFinishVerification} />
        )}
      
      </div>

      {goTonight && selectedProfile && (
        <div
          className="fixed top-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm flex items-center w-full justify-center z-9999"
          onClick={() => setGoTonight(false)}
        >
          <div
            className="relative bg-[#DAD8E5] rounded-[20px] w-140.75  overflow-hidden flex flex-col p-7.5 gap-5 backdrop-blur-[100px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setGoTonight(false)}
              className="absolute top-2 right-2 z-20 w-8 h-8 bg-[#E8E6F5] rounded-full flex items-center justify-center hover:cursor-pointer"
            >
              
              <CircleX className="w-6 h-6 text-[#7464E4]"/>
            </button>

            <div className="space-y-5">
              <div className="space-y-2.25">
                <h2 className="font-[Lexend] text-[35px] font-bold text-[#4F4F4F] leading-[100%] tracking-[-0.8px]">
                You chose {selectedProfile.name}
                </h2>
                <p className="font-[Lexend] text-[16px] font-normal text-[#4F4F4F] leading-[100%] tracking-[-0.8px]">
                  You're about to send a <span className="bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)] bg-clip-text text-transparent font-medium">special invite</span>
                </p>
              </div>

              <div className="relative">
                <img
                src={selectedProfile.img}
                alt={selectedProfile.name}
                className="w-full h-132.75 object-cover rounded-xl"
              />

              <div className="absolute bottom-0 inset-x-0 rounded-b- overflow-hidden">
              {/* Gradient background layer */}
                  <div className="absolute inset-0 bg-[linear-gradient(180.84deg,rgba(75,22,76,0)_16.81%,rgba(75,22,76,0.5)_47.69%,#0D030B_88.31%),linear-gradient(186.58deg,rgba(75,22,76,0.2)_55.94%,rgba(75,22,76,0.01)_24.79%)] rounded-b-xl rounded-t-xl" />

                  {/* Content layer with padding */}
                  <div className="relative px-5 pt-20 pb-6">
                      <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-[Lexend] text-2xl font-semibold">
                          Shalini Singh, 28
                      </h3>
                      <BadgeCheck size={14} color="#fff" />
                      </div>

                      <p className="text-white/80 text-sm font-[Lexend] mb-3">4 Mutual Mates</p>

                      {/* Tags */}
                      <div className="flex gap-2">
                      {['Bollywood Nights', 'Chill Crowd', 'Party Regular'].map(tag => (
                          <span key={tag} className="bg-black/40 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-[Lexend]">
                          {tag}
                          </span>
                      ))}
                      </div>
                  </div>
              </div>
              </div>
              
              

              <div className="space-y-5">
                <button className="w-full bg-[linear-gradient(81.67deg,#C229C0_-0.79%,#FC4B6A_89.7%)] text-white py-4 rounded-full font-[Lexend] font-semibold text-base hover:cursor-pointer" onClick={handleMakeYourMove}>
                Make Your Move
               </button>

                <p className="font-[Lexend] font-normal text-[18px] text-[#4F4F4F] text-center align-middle tracking-normal leading-6">Add a drink to introduce yourself</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App



