
import { useNavigate } from 'react-router-dom'
import LeftComponent from '../Shared/LeftComponent'
import RightComponent from './RightComponent'

const ExperienceComponent = () => {
  const navigate = useNavigate()

  navigate('/experience')

  return (
    <div className="h-screen flex">
      <div className="w-1/5 bg-gray-500 flex ">
        <LeftComponent />
      </div>
      {/* Right section */}
      <div className="flex-1 bg-gray-200 flex justify-center">
        <RightComponent />
      </div>
    </div>
  )
}

export default ExperienceComponent