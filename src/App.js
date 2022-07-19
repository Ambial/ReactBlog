import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from './pages/SharedLayout';
import Navbar from "./components/Navbar"
import Create from './pages/Create';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>      
        <Route path="/" element={<SharedLayout />} />
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
