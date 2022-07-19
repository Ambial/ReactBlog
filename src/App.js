import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from './pages/SharedLayout';
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
