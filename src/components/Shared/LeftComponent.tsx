import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import profile from "../../assets/icons/profile.svg"
import breifcase from "../../assets/icons/breifcase.svg"
import projects from "../../assets/icons/projects.svg"
import education from "../../assets/icons/education.svg"
import contact from "../../assets/icons/contact.svg"


const LeftComponent = () => {
    const location = useLocation()
    const navigate = useNavigate()
  return (
    <div>
      <div>
        <img src="https://i.postimg.cc/Pfm17k9r/Whats-App-Image-2025-01-24-at-18-47-19-2dbebc4a-fotor-bg-remover-20250124184931.png" alt="Image" className='h-1/5' />
      </div>
      <div>
      <div className="flex flex-col relative  justify-center h-full p-4 z-10 bg-opacity-50 bg-yellow-300 ">
            <Button className={`mb-2 mt-2 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/" ? "bg-yellow-500 scale-105" : "hover:scale-95"}`} onClick={()=>navigate('/')}><img src={profile} alt="profile img" />Profile</Button>
            <Button className={`mb-2  bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/experience" ? "bg-yellow-500 scale-105" : "hover:scale-95"}`} onClick={()=>navigate('/experience')}><img src={breifcase} alt="breifcase image" className="h-8 w-8" />Experience</Button>
            <Button className={`mb-2  bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/projects" ? "bg-yellow-500 scale-105" : "hover:scale-95"}`} onClick={()=>navigate('/projects')}><img src={projects} alt="projects image" className="h-8 w-8" />Projects</Button>
            <Button className={`mb-2 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/education" ? "bg-yellow-500 scale-105" : "hover:scale-95"}`} onClick={()=>navigate('/education')}><img src={education} alt="education image"  className="h-8 w-8" />Education</Button>
            <Button className={`mb-2 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/contacts" ? "bg-yellow-500 scale-105" : "hover:scale-95"}`} onClick={()=>navigate('/contacts')}><img src={contact} alt="contact image"  className="h-8 w-8"/>Contacts</Button>        
        </div>
      </div>
    </div>
  )
}

export default LeftComponent
