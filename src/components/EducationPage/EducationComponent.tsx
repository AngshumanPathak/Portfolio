import { useNavigate } from 'react-router-dom';
import LeftComponent from '../Shared/LeftComponent';
import RightComponent from './RightComponent';

const EducationComponent = () => {
  const navigate = useNavigate();

  navigate('/education'); // Consider wrapping this in a `useEffect` to prevent infinite navigation loops.

  return (
    <div className="flex h-screen">
      {/* Left section */}
      <div className="w-1/5 bg-amber-400 flex flex-col overflow-y-auto scrollable-container">
        <LeftComponent />
      </div>
      {/* Right section */}
      <div className="flex-1 bg-gray-200 flex flex-col overflow-y-auto scrollable-container">
        <RightComponent />
      </div>
    </div>
  );
};

export default EducationComponent;
