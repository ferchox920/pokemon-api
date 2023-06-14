import  { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

	const filteredPokemons = globalPokemons.filter((pokemon: any) =>
		pokemon.name.includes(location.state.toLowerCase())
	);

  console.log(filteredPokemons);
  
	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map((pokemon: any) => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};