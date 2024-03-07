import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Process from './pages/Process';

import Blog from './pages/Blog';

import Portfolio from './pages/Portfolio';



function App() {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
