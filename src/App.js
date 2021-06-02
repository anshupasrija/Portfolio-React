import React,{Component}from 'react';
import About from'./components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import {Person} from '@material-ui/icons';
// import MenuIcon from '@material-ui/icons/Menu';




class App extends Component {
  

  render(){  
    
    return (
      <div>
      <Navbar/>     
      <About/>
      <Work/>
      <Contact/>
      </div>
      
    );
     
         
     

}
}

export default App;
