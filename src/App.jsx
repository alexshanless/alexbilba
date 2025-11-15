import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileSection from './components/profile/ProfileSection';
import Interests from './components/sections/Interests';
import SkillsExperienceLayout from './components/experience/SkillsExperienceLayout';
import FeaturedProjects from './components/sections/FeaturedProjects';
import PortfolioLinks from './components/sections/PortfolioLinks';
import DetailsGrid from './components/sections/DetailsGrid';
import TestimonialsSlider from './components/testimonials/TestimonialsSlider';
import ProjectsPage from './components/projects/ProjectsPage';
import JokePopup from './components/JokePopup';

const HomePage = () => {
  return (
    <div className='portfolio-container'>
      <ProfileSection />
      <Interests />
      <SkillsExperienceLayout />
      <FeaturedProjects />
      <PortfolioLinks />
      <DetailsGrid />
      <TestimonialsSlider />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      <JokePopup />
    </Router>
  );
};

export default App;