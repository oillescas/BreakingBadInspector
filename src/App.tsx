import { Route } from "wouter";
import CharacterListPage from 'Pages/CharacterListPage';
import CharacterDetailPage from "Pages/CharacterDetailPage";
import { AppContextProvider } from "state/context";

import './App.css'
import 'i18n/config';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Route path="/" component={CharacterListPage} />
        <Route path="/character/:id" component={CharacterDetailPage}>
        </Route>
      </div>

    </AppContextProvider>
  )
}

export default App;
