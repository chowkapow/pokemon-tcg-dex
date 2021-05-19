import './App.css';
import { useState, useEffect } from 'react';
import { getPokemonTcgData } from './services/pokemonTcg';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          <div className="wrapper">
            <div className="content">
              {pokemonTcgData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
