import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

interface PokemonProviderProps {
  children: React.ReactNode;
}


const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
    const [offset, setOffset] = useState(0);
    const [allPokemon, setAllPokemon] = useState<any>([]);
    const [globalPokemons, setGlobalPokemons] = useState<any>([]);
  
    const getAllPokemon = async (limit: number = 50) => {
      const baseUrl = "https://pokeapi.co/api/v2/";
      const res = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`);
      const data = await res.json();
  
      const promise = data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
  
      const results = await Promise.all(promise);
      setAllPokemon(results);
    };
  
    const getGlobalPokemons = async () => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=100000&offset=0`
		);
		const data = await res.json();

		const promises = data.results.map(async (pokemon :any) => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setGlobalPokemons(results);
		
	};
  
    useEffect(() => {
      getAllPokemon();
      getGlobalPokemons();
    }, []);
  
    const a = 2;
  
    return (
      <PokemonContext.Provider value={{ a }}>
        {children}
      </PokemonContext.Provider>
    );
  };
  
  export default PokemonProvider;
  