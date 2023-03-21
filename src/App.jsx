import "./styles/sass/styles.scss";
import Home from "./Components/Homepage/Home";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />             
            
            <Route path="/register" />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
