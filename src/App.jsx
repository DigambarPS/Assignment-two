import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar     from "./components/Navbar"
import Background from "./components/Background"
import Home       from "./pages/Home"
import About      from "./pages/About"
import Products   from "./pages/Products"
import Support    from "./pages/Support"
import NoPage     from "./pages/NoPage"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Background />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route Path="/about" element={<About />} />
      <Route Path="/products" element={<Products />} />
      <Route Path="/support" element={<Support />} />
      <Route Path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
