
import { useNavigate } from 'react-router-dom'
import LeftComponent from '../Shared/LeftComponent'
import RightComponent from './RightComponent'

const ContactsComponent = () => {

  const navigate = useNavigate()

  
    navigate('/contacts')
  

  return (
    <div>
      <div className="h-screen flex">
      <div className="w-1/5 bg-gray-500 flex ">
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

export default ContactsComponent
