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

  // Informations du profil utilisateur
  const [userInfos, setUserInfos] = useState([])

  const changeUserInfos = (newUserInfos) => {
    setUserInfos(newUserInfos)
  }

  // Affichage du formulaire dans le profil utilisateur
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {

    setShowForm(!showForm)
  }

  // Liste des profils sélectionnés pour l'utilisateur  
  const [selectList, setSelectList] = useState([])

  const addUserToSelectList = (newUserToSelectList) => {
    setSelectList([...selectList, newUserToSelectList])
  }

  // const resetSelectList = () => {
  //   setSelectList([])
  // }

  // Deck à afficher
  const loadSelectList = () => {

    profiles.forEach(profile => {    
      const isInSelectlist = selectList.includes(profile)
      if(
        (userInfos.attrMen === "1" && profile.gender === 0 && !isInSelectlist)
        || (userInfos.attrWomen === "1" && profile.gender === 1 && !isInSelectlist)
        || (userInfos.attrNB === "1" && profile.gender === 2 && !isInSelectlist)
      )

      addUserToSelectList(profile)
    });
  }
  
  // Blind de jetons
  const [jetons, setJetons] = useState(20)

  const miser = () => {
      jetons >= 1 ?
      setJetons(parseFloat(jetons)-1)
      : alert("Vous n'avez plus de jetons");
  }

  const allIn = () => {
      jetons >= 5 ?
      setJetons(parseFloat(jetons)-5)
      : alert("Vous n'avez plus assez de jetons");
  }

  return (
    <Context.Provider value={{profiles, userInfos, changeUserInfos, showForm, toggleForm, selectList, addUserToSelectList, loadSelectList, jetons, miser, allIn}}>
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
