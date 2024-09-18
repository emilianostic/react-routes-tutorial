import { BrowserRouter /*as Router*/, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";  
import Navbar from "./components/Navbar";
import User from "./pages/User"
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/usuarios" element={<Navigate to="/users"/>} />
        <Route path="/users/:id" element={<User/>} />
        <Route path="/dashboard/*" element={<Dashboard/>} >
        <Route path="welcome" element={<p>welcome!!!!</p>}/>{/* //subruta */}
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  

  );
}

export default App;
