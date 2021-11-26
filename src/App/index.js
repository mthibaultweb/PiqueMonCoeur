import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "components/Header";

// Pages
import ProfilPage from 'pages/Profil'
import JackpotPage from 'pages/Jackpot'
import Feed from 'pages/Feed'

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
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/">
          <ProfilPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
