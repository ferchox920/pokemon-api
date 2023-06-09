import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './assets/components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';

export const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        
      </Routes>
  );
};
