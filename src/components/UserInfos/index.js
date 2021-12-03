import React, { useContext } from 'react';
// import { useState } from "react";
// import styles from "./UserInfos.module.css";
import AppContext from 'contexts/AppContext'

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
// import userEvent from '@testing-library/user-event';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare)

const UserInfos = ({className}) => {

    const {userInfos} = useContext(AppContext)

    return (
    
        <div key={userInfos.id}>
            <h1>Mon profil</h1>
            <h2>Mon identité</h2>
            <p>Nom : {userInfos.firstName} {userInfos.lastName}</p>
            <p>Âge : {userInfos.age} ans</p>
            <p>Genre : 
                {userInfos.gender === "0" ? " King" : null}
                {userInfos.gender === "1" ? " Queen" : null}
                {userInfos.gender === "2" ? " Ace" : null}
            </p>
            <h2>Mes coordonnées</h2>
            <p>Téléphone : {userInfos.phone}</p>
            <p>Réseaux sociaux :</p>
            <ul>
                {userInfos.insta ?
                    <li><a href={userInfos.insta} ><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</a></li>
                    : null
                }
                {userInfos.twitter ?
                    <li><a href={userInfos.twitter} ><FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter</a></li>
                    : null
                }
                {userInfos.facebook ?
                    <li><a href={userInfos.facebook} ><FontAwesomeIcon icon="fa-brands fa-facebook-f" /> Facebook</a></li>
                    : null
                }
                {userInfos.tikTok ?
                    <li><a href={userInfos.tikTok} ><FontAwesomeIcon icon="fa-brands fa-tiktok" /> TikTok</a></li>
                    : null
                }
            </ul>
            <h2>Ma description</h2>
            <p>{userInfos.desc ? userInfos.desc : "Pas de description"}</p>

            <h2>Je recherche :</h2>
            <ul>
                {userInfos.attrWomen === "1" ? <li>Femme</li> : null}
                {userInfos.attrMen === "1" ? <li>Homme</li> : null }
                {userInfos.attrNB === "1" ? <li>Non binaire</li> : null }
            </ul>
            <p>
                {userInfos.relType === "0" ? "Pour pratiquer une activité physique régulière" : null}
                {userInfos.relType === "1" ? "On verra où la chance nous mène" : null}
                {userInfos.relType === "2" ? "Et si on pimentait la soirée ?" : null}
                {userInfos.relType === "3" ? "Je veux trouver l’âme-soeur" : null}
            </p>
        </div>

    )
}

export default UserInfos


