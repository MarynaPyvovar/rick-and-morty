import 'App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { Loader, GoogleAuth } from 'components';

const CharactersPage = lazy(() => import('pages/CharactersPage/CharactersPage'));
const CharacterDetailsPage = lazy(() => import('pages/CharacterDetailsPage/CharacterDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const App: React.FC = () => {
  
  return (
    <div className="App">
      <GoogleAuth />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<CharactersPage />} />
          <Route path='/:characterdId' element={<CharacterDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
