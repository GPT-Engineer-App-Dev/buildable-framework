import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;