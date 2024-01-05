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
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Teams from './pages/Teams';
function App() {
  return (
    <>
      <TopSection />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        width="40px"
        border-radius="50%"
        style={{ background: "green" }}
      />
    </>
  );
}

export default App;
