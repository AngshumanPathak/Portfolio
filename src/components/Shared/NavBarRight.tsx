import { Button } from "../ui/button"
import { useLocation, useNavigate } from "react-router-dom"
import profile from "../../assets/icons/profile.svg"
import breifcase from "../../assets/icons/breifcase.svg"
import projects from "../../assets/icons/projects.svg"
import education from "../../assets/icons/education.svg"
import contact from "../../assets/icons/contact.svg"

const NavBarRight = () => {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col absolute top-20 right-0 justify-center h-100 w-20 p-4 z-10 bg-opacity-50 bg-yellow-300 rounded-full border-r">
            <Button className={`mb-4 mt-4 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/" ? "bg-yellow-500 scale-105" : "hover: scale-95"}`} onClick={()=>navigate('/')}><img src={profile} alt="profile img"/></Button>
            <Button  className={`mb-4 mt-4 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/experience" ? "bg-yellow-500 scale-105" : "hover: scale-95"}`} onClick={()=>navigate('/experience')}><img src={breifcase} alt="breifcase image" className="h-8 w-8" /></Button>
            <Button  className={`mb-4 mt-4 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/projects" ? "bg-yellow-500 scale-105" : "hover: scale-95"}`} onClick={()=>navigate('/projects')}><img src={projects} alt="projects image" className="h-8 w-8" /></Button>
            <Button  className={`mb-4 mt-4 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/education" ? "bg-yellow-500 scale-105" : "hover: scale-95"}`} onClick={()=>navigate('/education')}><img src={education} alt="education image" /></Button>
            <Button  className={`mb-4 mt-4 bg-transparent rounded-full transform transition-transform duration-200 ${location.pathname === "/contacts" ? "bg-yellow-500 scale-105" : "hover: scale-95"}`} onClick={()=>navigate('/contacts')}><img src={contact} alt="contact image" /></Button>
        

        </div>
  )
}

export default NavBarRight
