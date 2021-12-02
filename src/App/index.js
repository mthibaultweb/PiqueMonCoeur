import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "components/Header";
import Context from "contexts/AppContext";

// Pages
import ProfilPage from 'pages/Profil'
import JackpotPage from 'pages/Jackpot'
import Deck from 'pages/Deck'
import { useState } from "react";

import profiles from "../data/profiles"

function App() {

  // const [userList, setUserList] = useState([])

  // const addUserToList = (newUser) => {
  //   setUserList([...userList, newUser])
  // } 

  const [userInfos, setUserInfos] = useState([])

  const changeUserInfos = (newUserInfos) => {
    setUserInfos(newUserInfos)
  }

  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {

    setShowForm(!showForm)
    }

  return (
    <Context.Provider value={{profiles, toggleForm, showForm, userInfos, changeUserInfos}}>
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
    </Context.Provider>
  );
}

export default App;
