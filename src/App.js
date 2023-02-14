import Home from "./home";
import Login from "./login";
import Register from "./register";
// import Wchart from "./wchart";
// import Mchart from "./mchart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element = { <Login /> } />
        <Route path="/home" element = { <Home /> } />
        <Route path="/" element = { <Register /> } />
      </Routes>

    </Router>
  );
}

export default App;
