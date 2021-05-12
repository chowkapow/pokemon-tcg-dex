import './App.css';
import { useState, useEffect } from 'react';
import { getPokemonTcgData } from './services/pokemonTcg';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const [pokemonTcgData, setPokemonTcgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tcgSet, setTcgSet] = useState('set.id:base1');

  useEffect(() => {
    async function fetchData() {
      let response = await getPokemonTcgData(tcgSet);
      setPokemonTcgData(response.data);
      setLoading(false);
    }
    fetchData();
  }, [tcgSet]);

  const handleTcgSet = (set) => {
    setLoading(true);
    setTcgSet(set);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Navbar handleTcgSet={handleTcgSet} />
          <div className="grid-container">
            {pokemonTcgData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
