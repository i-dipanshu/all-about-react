import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Toggle from "./Hooks/useState/useState";
import UpdateTitle from "./Hooks/useEffect/useEffect";
import SpreadOperator from "./Concepts/SpreadOperator";
import CleanUp from "./Hooks/useEffect/CleanUp";
import ControlledForm from "./Concepts/ControlledForm";

function App() {
  return (
    <Router>
      <div className="nav">
        <p>
          <Link to="/toggle">Toggle</Link>
        </p>
        <p>
          <Link to="/update">Update</Link>
        </p>
        <p>
          <Link to="/spread">Spread</Link>
        </p>
        <p>
          <Link to="/size">Size</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
      <Routes>
        <Route exact path="/toggle" element={<Toggle />} />
        <Route exact path="/update" element={<UpdateTitle />} />
        <Route exact path="/spread" element={<SpreadOperator />} />
        <Route exact path="/size" element={<CleanUp />} />
        <Route exact path="/login" element={<ControlledForm />} />
      </Routes>
    </Router>
  );
}

export default App;
