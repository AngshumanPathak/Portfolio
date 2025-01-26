
import { useNavigate } from 'react-router-dom'
import LeftComponent from '../Shared/LeftComponent'
import RightComponent from './RightComponent'

const ExperienceComponent = () => {
  const navigate = useNavigate()

  navigate('/experience')

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-y-auto">
      {/* Left section */}
      <div className="w-full md:w-1/5 bg-amber-400 flex flex-col overflow-y-auto scrollable-container">
        <LeftComponent />
      </div>
      {/* Right section */}
      <div className="flex-1 bg-gray-200 flex flex-col overflow-y-auto">
        <RightComponent />
      </div>
    </div>
  )
}

export default ExperienceComponent