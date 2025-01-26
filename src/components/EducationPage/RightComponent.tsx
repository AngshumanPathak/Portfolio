

import NavBarRight from "../Shared/NavBarRight"

const RightComponent = () => {

  

 

    
  return (
    <div className='bg-gray-300 flex-col w-full h-full overflow-y-auto '>
        <NavBarRight/>
        <div className='flex flex-col justify-center items-center'>
        <div className='mt-8 border-2 border-black rounded-lg'>
        <h1 className="text-6xl font-bodoni-bold font-extrabold mb-2 text-black p-4">EDUCATION</h1>
        </div>
        </div>

      <div className="p-2">
        <div className='m-8 bg-yellow-400 p-6 rounded-2xl shadow-lg'>
         <h1 className='text-2xl font-bodoni font-bold'>Bachelor's of Engineering (July 2017 - July 2021)</h1>
         <h2 className='text-xl font-bodoni font-semibold mb-2'>Major - Electronics and Communications Engineering</h2>
         <h3>Jorhat Institute of Science and Technology, Jorhat</h3>         
        </div>

        <div className='m-8  bg-yellow-400 p-6 rounded-2xl shadow-lg'>
         <h1 className='text-2xl font-bodoni font-bold'>Higher Secondary (July 2015 - July 2017)</h1>
         <h2 className='text-xl font-bodoni font-semibold mb-2'>Major - Science</h2>
         <h3>Salt Brook Academy, Dibrugarh</h3>         
        </div>
         
        <div className='m-8  bg-yellow-400 p-6 rounded-2xl shadow-lg'>
         <h1 className='text-2xl font-bodoni font-bold mb-2'>High School(Jan 2003 - July 2015)</h1>         
         <h3>St. Xavier's School, Dibrugarh</h3>         
        </div>

       </div>    
        
    </div>
  )
}

export default RightComponent
