
import NavBarRight from "../Shared/NavBarRight"



  const RightComponent = () => {
    return (
      <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg">
        <NavBarRight />
        <div className="w-full h-full">
          <img src="https://i.postimg.cc/Pfm17k9r/Whats-App-Image-2025-01-24-at-18-47-19-2dbebc4a-fotor-bg-remover-20250124184931.png" alt="Profile Picture" className="w-full h-full object-cover" />
        </div>
        
      </div>
    )
  }
  
  export default RightComponent