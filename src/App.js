import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from './pages/SharedLayout';
import Navbar from "./components/Navbar"
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>      
        <Route path="/" element={<SharedLayout />} />
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
