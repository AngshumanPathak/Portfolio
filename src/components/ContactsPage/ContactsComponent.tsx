
import { useNavigate } from 'react-router-dom'
import LeftComponent from '../Shared/LeftComponent'
import RightComponent from './RightComponent'

const ContactsComponent = () => {

  const navigate = useNavigate()

  
    navigate('/contacts')
  

  return (
    <div className="flex h-full">
      {/* Left section */}
      <div className="w-1/5 bg-gray-500 flex flex-col overflow-y-auto no-scroll">
        <LeftComponent />
      </div>
      {/* Right section */}
      <div className="flex-1 bg-gray-200 flex flex-col overflow-y-auto">
        <RightComponent />
      </div>
    </div>
  )
}

export default ContactsComponent
