import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/globals.css";

// Pages
import Home from "./pages/Home";
import Program from "./pages/Program";
import Curriculum from "./pages/Curriculum";
import ResearchProducts from "./pages/ResearchProducts";
import Admissions from "./pages/Admissions";
import IPPolicy from "./pages/IPPolicy";
import Apply from "./pages/Apply";
import ProgramOverview from "./pages/ProgramOverview";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/research-products" element={<ResearchProducts />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/ip-policy" element={<IPPolicy />} />
        <Route path="/program-overview" element={<ProgramOverview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
