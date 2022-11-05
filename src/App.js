import "./App.css";
import {Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import Home from "./components/home";
import ContactMe from "./components/contactMe";

function App() {
  return (
    //  <BrowserRouter>
    //  <Navbar/>
    //  <Routes>
    //      <Route path='/' element={<Home/>}/>
    //      <Route path='/AboutMe' element={<AboutMe/>}/>
    //      <Route path='/ContactMe' element={<ContactMe/>}/>
    //  </Routes>
    //  </BrowserRouter>

    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
