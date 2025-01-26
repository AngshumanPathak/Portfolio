
import telephone from "../../assets/icons/telephone.svg"
import whatsApp from "../../assets/icons/whatsApp.svg"
import mail from "../../assets/icons/mail.svg"
import linkedIn from "../../assets/icons/linkedIn.svg"
import github from "../../assets/icons/github.svg"
import NavBarRight from '../Shared/NavBarRight'


const RightComponent = () => {
  return (
    <div className='bg-gray-300 flex-col w-full h-full'>
        <NavBarRight />
        <div className='flex flex-col justify-center items-center'>
        <div className='mt-8 border-2 border-black rounded-lg'>
        <h1 className="text-6xl font-bodoni-bold font-extrabold mb-2 text-black p-4">CONTACTS</h1>
        </div>
           
        <div className=' justify-center items-center m-8 bg-gray-400 p-6 rounded-2xl shadow-lg w-3/5'>
            <div className='flex items-center'>
               <img src={telephone} alt="telephone image" className='h-20 w-20 mr-4' />
               <div className='text-xl font-bodoni font-semibold'>
                <a href="tel:+918638690075" className='block'>+91 8638690075</a>
                </div>
            </div>

            <div className='flex items-center'>
               <img src={whatsApp} alt="telephone image" className='h-10 w-10 ml-5 mr-8' />
               <div className='text-xl font-bodoni font-semibold'>
               <a href="https://wa.me/918638690075" className='block' target="_blank" rel="noopener noreferrer">+91 8403938653</a>
                </div>
            </div>

            <div className='mt-4 flex items-center'>
               <img src={mail} alt="telephone image" className='h-10 w-10 ml-5 mr-8' />
               <div className='text-xl font-bodoni font-semibold'>
               <a href="mailto:pathakangshuman700@gmail.com" className='block' target="_blank" rel="">pathakangshuman700@gmail.com</a>
                </div>
            </div>

            <div className='mt-4 flex items-center'>
               <img src={linkedIn} alt="telephone image" className='h-10 w-10 ml-5 mr-8' />
               <div className='text-xl font-bodoni font-semibold'>
               <a href="https://www.linkedin.com/in/angshuman-pathak/" className='block' target="_blank" rel="noopener noreferrer">www.linkedin.com/in/angshuman-pathak/</a>
                </div>
            </div>


            <div className='mt-4 flex items-center'>
               <img src={github} alt="telephone image" className='h-10 w-10 ml-5 mr-8' />
               <div className='text-xl font-bodoni font-semibold'>
               <a href="https://github.com/AngshumanPathak" className='block' target="_blank" rel="noopener noreferrer">github.com/AngshumanPathak</a>
                </div>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default RightComponent
