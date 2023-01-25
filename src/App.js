import Home from "./home";
import Login from "./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = { <Login /> } />
        <Route path="/home" element = { <Home /> } />
      </Routes>

    </Router>
  );
}

export default App;
