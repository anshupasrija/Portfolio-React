import React,{Component}from 'react';
import About from'./components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import {Person} from '@material-ui/icons';




class App extends Component {
  

  render(){  
    
    return (
      <div>
        <Person/>
      <About/>
      <Work/>
      <Contact/>
      </div>
      
    );
     
         
     

}
}

export default App;
