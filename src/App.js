import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebDesign from './pages/WebDesign';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';
import OurCompany from './pages/OurCompany';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourcompany" element={<OurCompany />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/appdesign" element={<AppDesign />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
