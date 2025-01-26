import { useState, useEffect } from "react"
import NavBarRight from "../Shared/NavBarRight"


const experiences = [
  {
    title: 'Website Development for E-Com website',
    details: [
      'Development of a dynamic product catalogue UI for an E-commerce website using the MERN (MongoDB, Express.js, React.js, Node.js) stack.',
      'Designed and implemented user authentication features, including registration, login, and password reset functionality, to enhance website security and user experience.',
      'Utilized React.js for building interactive and responsive user interfaces, ensuring seamless navigation and optimal performance across devices.',
      
    ],
  },
  {
    title: 'L1 Support for Banking Client',
    details: [
      'Provided frontline support for ServiceNow and JIRA requests, demonstrating proficiency in troubleshooting and issue resolution.',
      'Successfully resolved various tickets related to Nifi, including installation, configuration, and performance optimization.',
      'Proficiently handled tickets concerning Chronox Dashboard, ensuring smooth operation and resolving any technical issues promptly.',
      'Collaborated with cross-functional teams to escalate and resolve complex issues, ensuring minimal downtime and customer impact.',
    ],
  },
]


const RightComponent = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length)
    }, 5000)

    return () => clearInterval(interval)
    }, [])

    const handleClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length)
    }

  return (
    <div className='bg-gray-300 flex-col w-full h-full'>
        <NavBarRight />
        <div className='flex flex-col justify-center items-center'>
        <div className='mt-8 border-2 border-black rounded-lg'>
        <h1 className="text-6xl font-bodoni-bold font-extrabold mb-2 text-black p-4">EXPERIENCE</h1>
        </div>
        <div className='m-8 bg-yellow-400 p-6 rounded-2xl shadow-lg w-3/5' onClick={handleClick}>
         <h1 className='text-2xl font-bodoni font-bold mb-2'>Infosys Limited (Jan 2022 - July 2024)</h1>
         <h2 className='text-xl font-bodoni font-semibold mb-4'>Designation - Systems Engineer</h2>
          <ol className='list-decimal list-inside space-y-2'>
            <li className='font-semibold'>{experiences[currentIndex].title}</li>
            <ul className='list-disc list-inside space-y-2'>
             {experiences[currentIndex].details.map((detail, index) => (
            <li key={index}>{detail}</li>
             ))}
               
            </ul>                        
          </ol>
        </div>
        </div>
        
    </div>
  )
}

export default RightComponent
