
import './App.css'
import Pokemones from './Pokemones'

const pokemones=[
  {
    nombre:"Pikachu",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  },
  {
    nombre:"Charizard",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
  },
  {
    nombre: "Bulbasaur",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

  },
  {
    nombre: "Squirtle",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
  },
  {
    nombre: "Wartortle",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
  },
  {
    nombre: "Blastoise",
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
  }
]
function App() {
  

  return (
    <div> 
      <Pokemones pokemones={pokemones}/>
    </div>
  
  )
}

export default App
