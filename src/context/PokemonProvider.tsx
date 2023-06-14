import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hooks/useForm";

interface PokemonProviderProps {
  children: React.ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState<any>([]);
  const [globalPokemons, setGlobalPokemons] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const getAllPokemons = async (limit: number = 50) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promise = data.results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promise);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const limit = 500;
    const totalPokemons = 2000;
    const results: any[] = [];
  
    for (let offset = 0; offset < totalPokemons; offset += limit) {
      const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
      const data = await res.json();
  
      const promises = data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
  
      const pokemons = await Promise.all(promises);
      results.push(...pokemons);
    }
  
    setGlobalPokemons(results);
    setLoading(false);
  };
  
  
const getPokemonByID = async (id: any) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	};

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  const onClickLoadMore = () => {
		setOffset(offset + 50);
	};

  const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

	const [filteredPokemons, setfilteredPokemons] = useState<any[]>([]);

const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTypeSelected({
    ...typeSelected,
    [e.target.name]: e.target.checked,
  });

  if (e.target.checked) {
    const filteredResults = globalPokemons.filter((pokemon: any) =>
      pokemon.types.map((type: any) => type.type.name).includes(e.target.name)
    );
    setfilteredPokemons((prevFilteredPokemons) => [
      ...prevFilteredPokemons,
      ...filteredResults,
    ]);
  } else {
    const filteredResults = filteredPokemons.filter(
      (pokemon) =>
        !pokemon.types.map((type:any) => type.type.name).includes(e.target.name)
    );
    setfilteredPokemons([...filteredResults]);
  }
};

return (
  <PokemonContext.Provider
    value={{
      valueSearch,
      onInputChange,
      onResetForm,
      allPokemons,
      globalPokemons,
      getPokemonByID,
      onClickLoadMore,
      // Loader
      loading,
      setLoading,
      // Btn Filter
      active,
      setActive,
      // Filter Container Checkbox
      handleCheckbox,
      filteredPokemons,
    }}
  >
    {children}
  </PokemonContext.Provider>
  );
};

export default PokemonProvider;