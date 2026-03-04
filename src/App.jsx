import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import About from "./components/About";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

/* 🔹 Scroll To Top Component */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Add this line */}
      <div className="flex flex-col min-h-screen bg-[#fcfcfc]">
        <main className="grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tos" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;