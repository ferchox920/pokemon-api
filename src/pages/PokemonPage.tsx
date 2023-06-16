import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { primerMayuscula } from '../helper/helper';

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
  height: number;
  weight: number;
  stats: {
    base_stat: number;
  }[];
}

export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const { id } = useParams<{ id: string }>();

  const fetchPokemon = async (id: string) => {
    try {
      const data = await getPokemonByID(id);
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching pokemon:', error);
    }
  };

  useEffect(() => {
    fetchPokemon(id as string);
  }, [id]);

  return (
    <main className='container main-pokemon'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='header-main-pokemon'>
            <span className='number-pokemon'>#{pokemon?.id}</span>
            <div className='container-img-pokemon'>
              <img
                src={pokemon?.sprites.other?.dream_world?.front_default || pokemon?.sprites.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className='container-info-pokemon'>
              <h1>{primerMayuscula(pokemon?.name as string)}</h1>
              <div className='card-types info-pokemon-type'>
                {pokemon?.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className='info-pokemon'>
                <div className='group-info'>
                  <p>Altura</p>
                  <span>{pokemon?.height}</span>
                </div>
                <div className='group-info'>
                  <p>Peso</p>
                  <span>{pokemon && pokemon.weight ? pokemon.weight / 10 : 0}KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className='container-stats'>
            <h1>Estadísticas</h1>
            <div className='stats'>
              <div className='stat-group'>
                <span>Hp</span>
                <div className='progress-bar'></div>
                <span className='counter-stat'>
                  {pokemon?.stats[0].base_stat}
                </span>
              </div>
              <div className='stat-group'>
                <span>Attack</span>
                <div className='progress-bar'></div>
                <span className='counter-stat'>
                  {pokemon?.stats[1].base_stat}
                </span>
              </div>
              <div className='stat-group'>
                <span>Defense</span>
                <div className='progress-bar'></div>
                <span className='counter-stat'>
                  {pokemon?.stats[2].base_stat}
                </span>
              </div>
              <div className='stat-group'>
                <span>Special Attack</span>
                <div className='progress-bar'></div>
                <span className='counter-stat'>
                  {pokemon?.stats[3].base_stat}
                </span>
              </div>
              <div className='stat-group'>
                <span>Special Defense</span>
                <div className='progress-bar'></div>
                <span className='counter-stat'>
                  {pokemon?.stats[4].base_stat}
                </span>
              </div>
              <div className='stat-group'>
                <span>Speed</span>
                <div className='progress-bar'></div>
                <span className='counter-stat'>
                  {pokemon?.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
