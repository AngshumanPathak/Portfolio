import React from 'react';
import { useNavigate } from 'react-router-dom';


const LeftComponent: React.FC = () => {

  const navigate = useNavigate()


  return (
    <div className="text-left text-white animate-swipeIn mt-3 p-6">
      <h1 className="text-2xl font-bodoni-bold font-extrabold mb-2 text-black"> HI THERE!</h1>
      <div className='flex flex-row items-center'>
      <p className="text-6xl font-bodoni-bold font-extrabold mb-2 text-black"> I'M </p>
      
      </div>
      <p className="text-6xl font-cinzel text-ellipsis mb-2 text-yellow-300">ANGSHUMAN<br/>PATHAK</p>
        <button className="text-xl font-bodoni-bold font-extrabold mb-2 text-black bg-yellow-200 p-4 border-r-2 rounded-full">Web Developer</button>
      <p>
        I am a web developer with a passion for creating beautiful and user-friendly websites. I can help you acheive your dreams of owning a professional website. I have experience working as a frontend developer. I am always looking for new opportunities to learn and grow as a developer.
      </p>
      <div className="flex mt-4">
  <button className="text-xl font-serif mb-2 text-yellow-200 bg-transparent p-4 " onClick={()=>navigate('/experience')}>
    Learn More
  </button>
  
  <a href="https://drive.google.com/drive/folders/1_AbMX759hqfxWsHhgQKexkswBehqjX2U?usp=sharing"className="text-xl font-serif mb-2 text-yellow-200 bg-transparent p-4 ">Download Resume</a>
  
</div>

      
    
    </div>
  );
};

export default LeftComponent;
