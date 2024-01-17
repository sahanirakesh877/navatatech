import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import Teams from "./pages/Teams";
import Inquiry from "./pages/Inquiry";
import ServiceDetails from "./pages/ServiceDetails";
import Jobs from "./pages/Jobs";
import Pricing from "./pages/Pricing";
import WebDevelopment from "./pages/pricing/WebDevelopment";
import Digitalmarketing from "./pages/pricing/Digitalmarketing";
import GraphicsDesign from "./pages/pricing/GraphicsDesign";
function App() {
  return (
    <>
      <TopSection />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/pricing/web" element={<WebDevelopment/>} />
        <Route path="/pricing/digmarketing" element={<Digitalmarketing/>} />
        <Route path="/pricing/graphics" element={<GraphicsDesign/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        width="40px"
        border-radius="50%"
        style={{ background: "purple" }}
      />
    </>
  );
}

export default App;
