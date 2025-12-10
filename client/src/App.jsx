import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { LanguageProvider } from './store/languageStore.jsx';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;