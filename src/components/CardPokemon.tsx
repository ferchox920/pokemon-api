import React from 'react';
import { Link } from 'react-router-dom';

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default:string,
    other: { 
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

interface CardPokemonProps {
  pokemon: Pokemon;
}

export const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
      <div className='card-img'>
        <img
          src={pokemon.sprites.other?.dream_world?.front_default || pokemon.sprites.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className='card-info'>
        <span className='pokemon-id'>N° {pokemon.id}</span>
        <h3>{pokemon.name}</h3>
        <div className='card-types'>
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
