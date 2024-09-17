import { BrowserRouter /*as Router*/, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";  
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  

  );
}

export default App;
