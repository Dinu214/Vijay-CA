import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/about" 
            element={
              <PlaceholderPage 
                title="About Page" 
                message="Coming soon: Learn more about our journey and mission to inspire change."
              />
            } 
          />
          <Route 
            path="/videos" 
            element={
              <PlaceholderPage 
                title="Videos" 
                message="Coming soon: Watch our inspiring talks and transformational content."
              />
            } 
          />
          <Route 
            path="/invite" 
            element={
              <PlaceholderPage 
                title="Book a Session" 
                message="Coming soon: Schedule a transformative speaking engagement."
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PlaceholderPage 
                title="Contact Us" 
                message="Coming soon: Get in touch with us for collaborations and inquiries."
              />
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;