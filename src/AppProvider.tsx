import { Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import { Navigation } from './assets/components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';

const AppProvider = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
      <Route path="search" element={<SearchPage />} />
    </Route>
  )
);

export {  AppProvider };
