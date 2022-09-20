import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Toggle from "./Hooks/useState/useState";


function App() {
  return (
    <Router>
      <div className='nav'>
        <h1><Link to='/toggle'>TOGGLE</Link></h1>
      </div>
      <Routes>
        <Route exact path="/toggle" element={<Toggle/>}/>
      </Routes>
    </Router>
  );
}

export default App;
