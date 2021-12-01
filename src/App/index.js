import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "components/Header";

// Pages
import ProfilPage from 'pages/Profil'
import JackpotPage from 'pages/Jackpot'
import Deck from 'pages/Deck'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/profil">
          <ProfilPage />
        </Route>
        <Route exact path="/jackpot">
          <JackpotPage />
        </Route>
        <Route exact path="/deck">
          <Deck />
        </Route>
        <Route exact path="/">
          <ProfilPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
