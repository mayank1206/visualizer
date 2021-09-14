import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sorting from './components/Sorting';
import PathFinder from './components/PathFinder';
function App() {

  const [algo, setAlgo] = useState(['sort','Merge Sort']);

  function onAlgoChange(newAlgo) {
    setAlgo(newAlgo);
  }

  return (
    <div className="App">
      <Navbar onAlgoChange={onAlgoChange}/>
      { 
        algo[0] == 'sort' ? <Sorting algo={algo} />:<PathFinder algo={algo} />
      }
    </div> 
  );
}

export default App;






      
    

