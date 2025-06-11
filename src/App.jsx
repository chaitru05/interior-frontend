import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery'; // ✅ Import your Gallery component
import './styles/App.css';
import './index.css';
import firebase from './components/firebase';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <main>
                  <Hero />
                  <About />
                  <Projects />
                  <Services />
                  <Profile />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />

          {/* Gallery Page Route */}
          <Route
            path="/gallery"
            element={
              <>
                <Gallery />
              
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
