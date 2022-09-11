import './App.css';
import ReactDom from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Components
// import Navbar from "src/components/Navbar"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Support from "./pages/Support"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route Path="/" element={<Home/>}/>
      <Route Path="/" element={<About/>}/>
      <Route Path="/" element={<Products/>}/>
      <Route Path="/" element={<Support/>}/>
    </Routes>
    </BrowserRouter>
    
    <Home/>
    </>
  );
}

export default App;
