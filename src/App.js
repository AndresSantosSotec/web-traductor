import React from 'react';



import Contact from './Pantallas/Contact';
import Benefits from './Pantallas/Benefits';
import HowWeWork from './Pantallas/HowWeWork';
import Services from './Pantallas/Services';
//import  Principal  from './Pantallas/Principal';
function App() {
  return (
    <div className="App">
      {/* Llamar a cada componente */}
      
      <Contact />
      <Benefits />
      <HowWeWork />
      <Services />
    </div>
  );
}

export default App;
