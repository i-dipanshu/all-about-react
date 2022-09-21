import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Toggle from "./Hooks/useState/useState";
import UpdateTitle from './Hooks/useEffect/useEffect';
import SpreadOperator from './Concepts/SpreadOperator';


function App() {
  return (
    <Router>
      <div className="nav">
        <h1>
          <Link to="/toggle">Toggle</Link>
        </h1>
        <h1>
          <Link to="/update">Update</Link>
        </h1>
        <h1>
          <Link to="/spread">Spread</Link>
        </h1>
      </div>
      <Routes>
        <Route exact path="/toggle" element={<Toggle />} />
        <Route exact path="/update" element={<UpdateTitle />} />
        <Route exact path="/spread" element={<SpreadOperator />} />
      </Routes>
    </Router>
  );
}

export default App;
