import { useNavigate } from 'react-router-dom'

import RightComponent from './RightComponent'
import LeftComponent from '../Shared/LeftComponent'

const ProjectsComponent = () => {

    const navigate = useNavigate()

  
    navigate('/projects')
  

  return (
    <div>
      <div className="h-screen flex">
      <div className="w-1/5 bg-gray-500 flex">
        <LeftComponent />
      </div>
      {/* Right section */}
      <div className="flex-1 bg-gray-200 flex justify-center">
        <RightComponent />
      </div>
    </div>
    </div>
  )
}

export default ProjectsComponent
