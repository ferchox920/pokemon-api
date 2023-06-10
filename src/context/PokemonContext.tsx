import { createContext } from "react";

// Define el valor predeterminado para el contexto
const defaultValue: any = null;

// Crea el contexto de Pokémon
export const PokemonContext = createContext(defaultValue);
