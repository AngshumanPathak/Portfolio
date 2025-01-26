import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomePage/HomeComponent';
import ExperienceComponent from './components/ExperiencePage/ExperienceComponent';
import Projects from './components/ProjectsPage/ProjectsComponent';
import EducationComponent from './components/EducationPage/EducationComponent';
import './App.css';
import ContactsComponent from './components/ContactsPage/ContactsComponent';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/experience" element={<ExperienceComponent />} />
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/education' element={<EducationComponent/>}></Route>
          <Route path = '/contacts' element= {<ContactsComponent/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;