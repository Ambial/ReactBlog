import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from './pages/SharedLayout';
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>      
        <Route path="/" element={<SharedLayout />} />
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */ }
      </Routes>
    </Router>
  );
}

export default App;
