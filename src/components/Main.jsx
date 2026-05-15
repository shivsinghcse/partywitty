import GetVerified from "./GetVerified"
import MainFeed from "./MainFeed"

const Main = ({ onGoTonight, onGetVerified  }) => {
  return (
    <>
    <div className="flex justify-between  gap-10 p-4">
        <div className="flex-1  flex justify-center ">
            <MainFeed onGoTonight={onGoTonight}/>
        </div>
        <GetVerified onGetVerified={onGetVerified}/>
        
    </div>
      
      </>
  )
}

export default Main

