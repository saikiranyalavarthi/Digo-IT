import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./pages/About";
import Footer from "./Pages/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className="px-4 py-8 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
