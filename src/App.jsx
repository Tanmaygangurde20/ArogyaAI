import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Mission from './pages/Mission'
import Contact from './pages/Contact'
import Forecasting from './pages/Forecasting'
import Dropout from './pages/Dropout'
import Clustering from './pages/Clustering'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/dropout" element={<Dropout />} />
          <Route path="/clustering" element={<Clustering />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
