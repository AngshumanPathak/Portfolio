import { useNavigate } from 'react-router-dom'

import RightComponent from './RightComponent'
import LeftComponent from '../Shared/LeftComponent'

const ProjectsComponent = () => {

    const navigate = useNavigate()

  
    navigate('/projects')
  

  return (
    <div className="flex h-screen">
    {/* Left section */}
    <div className="w-1/5 bg-amber-400 flex flex-col overflow-y-auto scrollable-container ">
      <LeftComponent />
    </div>
    {/* Right section */}
    <div className="flex-1 bg-gray-200 flex flex-col overflow-y-auto">
      <RightComponent />
    </div>
  </div>
  )
}

export default ProjectsComponent
