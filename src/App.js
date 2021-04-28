import React,{Component}from 'react';
import About from'./components/About';
import Work from './components/Work';
import Contact from './components/Contact';




class App extends Component {
  

  render(){  
    
    return (
      <div>
      <About/>
      <Work/>
      <Contact/>
      </div>
      
    );
     
         
     

}
}

export default App;
