import ExploreFeed from "./ExploreFeed"
// import ProfileCard from "./ProfileCard"
import ProfileStack from "./ProfileStack"

const MainFeed = ({ onGoTonight }) => {
  return (
    <div className=" w-115.5 gap-4.5 flex flex-col items-center">
        <ExploreFeed />
        {/* <ProfileCard /> */}
        <ProfileStack onGoTonight={onGoTonight}/>
        
    </div>
  )
}

export default MainFeed

