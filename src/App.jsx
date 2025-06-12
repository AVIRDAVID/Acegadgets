import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (

    <div>
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element= {<Error404 />}/>
        <Route path="/" element= {<Homepage />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/login" element= {<Login />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
