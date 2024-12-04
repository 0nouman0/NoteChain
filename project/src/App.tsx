import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DomainGrid from './components/DomainGrid';
import CourseGrid from './components/CourseGrid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DomainGrid />} />
        <Route path="/courses/:domainId" element={<CourseGrid />} />
      </Routes>
    </Router>
  );
}

export default App;