import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Resume />
    </>
  );
}

export default App;
