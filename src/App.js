import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from './Screens/Signin';
import SignUp from './Screens/Signup';
import Home from './Screens/Home';
 

function App() {
  const email = true; // Ici, vous devez définir et initialiser la variable email
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route
            path="/Home"

            element={ email? <Home /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
