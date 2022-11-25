import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebDesign from './pages/WebDesign';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';
import OurCompany from './pages/OurCompany';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

const theme = {
  colors: {
    orange: '#e7816b',
    black: '#1d1c1e',
    white: '#fff',
    orangeLight: '#ffad9b',
    lightGray: 'hsla(0,0%,100%,.5)',
    gray: '#333136',
    office: '#f1f3f5',
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
