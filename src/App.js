import './App.css';
import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/calculator" component={<Calculator />} />
        <Route path="/quote" component={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
