import 'App.css';
import { Routes, Route } from 'react-router-dom';
import CharactersPage from 'pages/CharactersPage/CharactersPage';
import CharacterDetailsPage from 'pages/CharacterDetailsPage/CharacterDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CharactersPage />} />
        <Route path='/:characterdId' element={<CharacterDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
