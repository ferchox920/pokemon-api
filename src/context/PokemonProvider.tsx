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

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  const getPokemonById = async (id: string) => {
    const baseURL = "https://pokeapi.co/api/v2/";

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


  return (
    <PokemonContext.Provider
      value={{ valueSearch, onInputChange, onResetForm, allPokemons, globalPokemons, getPokemonById }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
