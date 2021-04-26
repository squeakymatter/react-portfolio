import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
