import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } =
    useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='card-list-pokemon container'>
          {filteredPokemons && filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon: any) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon: any) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
