import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Toggle from "./Hooks/useState/useState";
import UpdateTitle from './Hooks/useEffect/useEffect';


function App() {
  return (
    <Router>
      <div className='nav'>
        <h1><Link to='/toggle'>TOGGLE</Link></h1>
        <h1><Link to='/update'>UPDATE</Link></h1>
      </div>
      <Routes>
        <Route exact path="/toggle" element={<Toggle/>}/>
        <Route exact path="/update" element={<UpdateTitle/>}/>
      </Routes>
    </Router>
  );
}

export default App;
