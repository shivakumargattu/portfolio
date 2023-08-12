import About from "./components/About/About";


import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Protfolio from "./components/Portfolio/Protfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (<>
     <Navbar/>
    <Home />
    <About/>
    <Protfolio/>
    <Contact/>
    <Footer/>
    
  </>
   
  );
}

export default App;
  