import "./App.css";
import CharacterCard from "./components/CharacterCard";
import data from "./assets/data.json";


const characters = data;


function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>

      <div className="container">
        {characters.map((character, index) => {
          return <CharacterCard key={index} character={character} id={index} />
        })}
        
      </div>
    </div>
  );
}

export default App;
