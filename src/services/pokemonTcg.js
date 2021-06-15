const url = 'https://api.pokemontcg.io/v2/cards';

export async function getPokemonTcgData(set) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url + '?q=' + set, {
      headers: {
        'X-Api-Key': process.env.REACT_APP_POKEMON_TCG_API_KEY,
      },
    });
    resolve(res.json());
  });
}
