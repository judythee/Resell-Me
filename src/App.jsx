import './App.scss'
import NavBar from './components/NavBar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
