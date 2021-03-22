import React, { Fragment, useState } from 'react';
import Itachi from './Components/Itachi';
import Minato from './Components/Minato';
import './styles/App.css';

function App() {

  const [character, setCharacter] = useState(true);

  const toggleCharacter = () => {
    if(character){
      setCharacter(false);
    } else {
      setCharacter(true)
    }
  }

  return (
    <Fragment>
      {character ? <Itachi toggleCharacter={toggleCharacter}/> : <Minato toggleCharacter={toggleCharacter}/>}
    </Fragment>
  );
}

export default App;
