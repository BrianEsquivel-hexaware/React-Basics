import { useState, useEffect } from 'react';
import './PokemonList.css';

interface Pokemon {
  name: string;
  id: number;
  image: string;
  type: string;
}

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [count, setCount] = useState(10);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError('');
        const urls = Array.from({ length: count }, (_, i) => 
          `https://pokeapi.co/api/v2/pokemon/${i + 1}`
        );
        
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        
        const pokemon = data.map((p) => ({
          name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
          id: p.id,
          image: p.sprites.other['official-artwork'].front_default || p.sprites.front_default,
          type: p.types[0].type.name.charAt(0).toUpperCase() + p.types[0].type.name.slice(1)
        }));
        
        setPokemonList(pokemon);
      } catch (err) {
        setError('Failed to load Pokémon. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [count]);

  return (
    <div className="pokemon-container">
      <h4>Interactive Pokemon List Example</h4>
      
      <div className="pokemon-controls">
        <label htmlFor="pokemon-count">Load Pokemon:</label>
        <select 
          id="pokemon-count"
          value={count} 
          onChange={(e) => setCount(Number(e.target.value))}
        >
          <option value={5}>5 Pokemon</option>
          <option value={10}>10 Pokemon</option>
          <option value={20}>20 Pokemon</option>
        </select>
      </div>

      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading Pokemon data...</p>
        </div>
      )}

      {error && (
        <div className="error-state">
          <p>⚠️ {error}</p>
        </div>
      )}

      {!loading && !error && pokemonList.length === 0 && (
        <div className="empty-state">
          <p>No Pokémon found. Try loading more.</p>
        </div>
      )}

      {!loading && !error && pokemonList.length > 0 && (
        <div className="pokemon-list">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
              <h5>{pokemon.name}</h5>
              <p className="pokemon-id">#{pokemon.id}</p>
              <span className="pokemon-type">{pokemon.type}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonList;
