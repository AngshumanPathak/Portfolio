import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

const HomeComponent: React.FC = () => {

  
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row overflow-y-auto">
      {/* Left section */}
      <div className="flex-1 bg-gray-500 flex justify-center items-center p-4">
        <LeftComponent />
      </div>
      {/* Right section */}
      <div className="flex-1 bg-gray-300 flex justify-center items-center">
        <RightComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
