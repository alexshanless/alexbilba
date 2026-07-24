import './index.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import RedesignHome from './redesign/RedesignHome';
import WorkPage from './redesign/WorkPage';
import CaseStudyMigration from './redesign/CaseStudyMigration';
import RouteTransition from './redesign/RouteTransition';

// Per-route document titles for SEO / tab labels.
const TITLES = {
  '/': 'Alex Bilba — fullstack dev + ui designer',
  '/work': 'Work — Alex Bilba',
  '/work/platform-migration': 'Platform migration case study — Alex Bilba',
};

// On every route change: set the title, scroll to the top of the next page
// (so a Link from the bottom of one page lands at the start of the next), and
// honor a #hash by scrolling to that section instead.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = TITLES[pathname] ?? 'Alex Bilba';
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <RouteTransition>
        <Routes>
          <Route path='/' element={<RedesignHome />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/work/platform-migration' element={<CaseStudyMigration />} />
        </Routes>
      </RouteTransition>
    </Router>
  );
};

export default App;
