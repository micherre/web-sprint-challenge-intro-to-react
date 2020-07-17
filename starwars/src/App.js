import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import style from 'styled-components'
import Character from './Character'

const Names = style.p`
  font-size: 1.3rem;
  letter-spacing: .3rem;
  transition: font-size 2s;
  this.hover{
    font-size: 2rem;
  }` 

const Origins = style.p`
  font-size: .8rem;
  letter-spacing: .25rem;`

function App() {
  const [data, setData] = useState([])
  useEffect (() => {

    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setData(res.data.results)
        console.log(res.data.results)
      })
      .catch((err) => {
        console.log('Something went wrong!', err)
      })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        data.map((character) => {
          return <div>
              <Character url={character.image} key={character.id}/>
              <Names>{character.name}</Names>
              <Origins>{character.origin.name}</Origins>
            </div>
        })
      }
    </div>
  );
}

export default App;
