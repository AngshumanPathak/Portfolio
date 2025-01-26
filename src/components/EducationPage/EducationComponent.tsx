import { useNavigate } from 'react-router-dom';
import LeftComponent from '../Shared/LeftComponent';
import RightComponent from './RightComponent';

const EducationComponent = () => {
  const navigate = useNavigate();

  navigate('/education'); // Consider wrapping this in a `useEffect` to prevent infinite navigation loops.

  return (
    <div className="flex h-screen">
      {/* Left section */}
      <div className="w-1/5 bg-gray-500 flex flex-col overflow-y-auto no-scroll">
        <LeftComponent />
      </div>
      {/* Right section */}
      <div className="flex-1 bg-gray-200 flex flex-col overflow-y-auto">
        <RightComponent />
      </div>
    </div>
  );
};

export default EducationComponent;
