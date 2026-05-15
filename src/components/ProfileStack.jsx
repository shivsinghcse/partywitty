import ProfileCard from "./ProfileCard"

const profiles = [
  { id: 1, name: "Zoe Miller", age: 22, img: "./images/profileCardImage.jpg" }, 
  { id: 2, name: "Sarah", age: 24, img: "./images/user.png" }, 
  { id: 3, name: "Mia", age: 21, img: "./images/profilephoto.png" }, 
]

function ProfileStack({ onGoTonight }) {
  return (
    <div className="relative w-115.5 h-183.5 mt-8">
      {profiles.map((profile, idx) => (
        <div
          key={profile.id}
          className={`
            absolute  inset-0 rounded-[30px] overflow-hidden
            transition-all duration-300 ease-out 
            ${idx === 0? 'z-30 scale-100 translate-y-0' : ''}
            ${idx === 1? 'z-20 scale-[0.95] -translate-y-7' : ''}
            ${idx === 2? 'z-10 scale-[0.9] -translate-y-14' : ''}
            ${idx > 2? 'hidden' : ''}
          `}
          style={{
            boxShadow: idx === 0? '0px 0px 32px 0px rgba(0,0,0,0.12)' : 'none'
          }}
        >
          <ProfileCard profile={profile} isActive={idx === 0} onGoTonight={onGoTonight} />
        </div>
      ))}
    </div>
  )
}

export default ProfileStack

