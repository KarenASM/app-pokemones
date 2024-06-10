
import './App.css'
import Pokemones from './Pokemones'

const pokemones=[
  {
    nombre:"Pikachu",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
  },
  {
    nombre:"Charizard",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png'
  }
]
function App() {
  

  return (
    <Pokemones pokemones={pokemones}/> 
  )
}

export default App
