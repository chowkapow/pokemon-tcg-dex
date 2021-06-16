import './App.css';
import { useState, useEffect } from 'react';
import { getPokemonTcgData } from './services/pokemonTcg';
import { Route, Switch } from 'react-router-dom';
import Card from './components/Card';
import CardDetail from './components/CardDetail';
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
      <Navbar handleTcgSet={handleTcgSet} />
      <div className="wrapper">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Switch>
            <Route exact path="/">
              <div className="gallery">
                {pokemonTcgData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon} />;
                })}
              </div>
            </Route>
            <Route path="/cards/:cardId">
              <CardDetail />
            </Route>
          </Switch>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
