import { Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';
import About from './pages/About';

const AppRouter = createBrowserRouter(
  createRoutesFromChildren(
    

    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About />}/>
      <Route path="pokemon/:id" element={<PokemonPage />} />
      <Route path="search" element={<SearchPage />} />
    </Route>
  )
);

export {  AppRouter };
