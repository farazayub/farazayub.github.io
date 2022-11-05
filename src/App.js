import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import Home from './components/home'
import ContactMe from './components/contactMe';


function App() {
  
  return (
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/AboutMe' element={<AboutMe/>}/>
       <Route path='/ContactMe' element={<ContactMe/>}/>
   </Routes>
   </BrowserRouter>
   

  );
}

export default App;
