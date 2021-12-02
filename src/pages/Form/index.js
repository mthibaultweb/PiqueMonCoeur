import React from 'react';
import { useState } from "react";
import styles from "./Form.module.css";

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare)

const Form = () => {

        const [input, setInput] = useState({});
      
        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInput(values => ({...values, [name]: value}))
debugger
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(input);
        }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.alignement}>
                <h1 className={styles.titre}>Mon profil</h1>

                <h2 className={styles.titre2}>Mes coordonnées</h2>
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="name">Nom </label><br/>
                    <input type="text" name="lastname" id="lastname" value={input.lastname || ""} onChange={handleChange} required/>
                </div>

                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="name">Prénom </label> <br/>
                    <input type="text" name="firstname" id="firstname" value={input.firstname || ""} onChange={handleChange} required/> 
                </div>
                
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="number">Âge </label> <br/>
                    <input type="tel" name="age" id="age" value={input.age || ""} onChange={handleChange} required/><br/>
                </div>

                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="name">Numéro de téléphone </label> <br/>
                    <input type="text" name="phone" id="phone" value={input.phone || ""} onChange={handleChange} required/>
                </div>
                
                <div className={styles.inline}>
                </div>

                <h2 className={styles.titre3}>Je me décris briévement</h2>

                <div className={styles.inputBlock}>
                <label className={styles.titreform} htmlFor="name">Description </label><br/>
                <input type="text" name="description" id="description" value={input.description || ""} onChange={handleChange} required/>
                </div>

                <div className={styles.inline}>
                </div>
                
                <div className={styles.inputBlock}>
                <h2 className={styles.titre3}>Mes réseaux sociaux</h2>
                    <label className={styles.titreform} htmlFor="name">Instagram </label> <br/>
                    <input type="url" name="instagram" id="instagram" value={input.instagram || ""} onChange={handleChange} />
                </div>

                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="name">Twitter </label> <br/>
                    <input type="url" name="twitter" id="twitter" value={input.twitter || ""} onChange={handleChange}/>
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="name">Facebook </label> <br/>
                    <input type="url" name="facebook" id="facebook" value={input.facebook || ""} onChange={handleChange} />
               </div>
               <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="name">Tik-Tok </label> <br/>
                    <input type="url" name="tiktok" id="tiktok" value={input.tiktok || ""} onChange={handleChange} />
               </div>

               <div className={styles.inline}>
                </div>

                {/* PARTIE BUTTONS RADIO */}

               <div className={styles.inputBlock}>
                <h2 className={styles.titre3}>Le genre auquel <br/> je m'identifie</h2>
                </div>

                <div className={styles.inputBlock}>

                <label className={styles.container}>
                    <input type="radio" id="king" name="gender" value="0" onChange={handleChange} />
                    <span className={styles.checkmark} for="king" htmlFor="king">Roi (Homme)
                    </span>
                    </label>
                </div>


                <div className={styles.inputBlock}>
                    <input type="radio" id="queen" name="gender" value="1" onChange={handleChange} />
                    <label className={styles.titre5} for="queen" htmlFor="queen">Reine (Femme)</label>
                </div>
                <div className={styles.inputBlock}>
                    <input type="radio" id="ace" name="gender" value="2" onChange={handleChange} />
                    <label className={styles.titre5} for="ace" htmlFor="ace">As (Non-binaire)</label>
                </div>

                <div className={styles.inline}>
                </div>

                <h2 className={styles.titre3}>Le type de personne que je recherche</h2>
                <div>
                    <h3 className={styles.titre3}>Roi (Homme)</h3>
                    <input type="radio" id="attrKing" name="attrMen" value={true} onChange={handleChange}/>
                    <label className={styles.titre5} for="king" htmlFor="attrKing">Oui</label> <br/>
                    <input type="radio" id="attrKing" name="attrMen" value={false} onChange={handleChange} checked/>
                    <label className={styles.titre5} htmlFor="attrKing">Non</label>
                </div>
                <div>
                <h3 className={styles.titre3}>Reine (Femme)</h3>
                    <input type="radio" id="attrQueen" name="attrWomen" value={true} onChange={handleChange}/>
                    <label className={styles.titre5} htmlFor="attrQueen">Oui</label>  <br/>
                    <input type="radio" id="attrQueen" name="attrWomen" value={false} onChange={handleChange} checked/>
                    <label className={styles.titre5} htmlFor="attrQueen">Non</label>

                </div>

                <div>
                <h3 className={styles.titre3}>As (Non-binaire)</h3>
                    <input type="radio" id="attrAce" name="attrNB" value={true} onChange={handleChange}/>
                    <label className={styles.titre5} htmlFor="attrAce">Oui</label>  <br/>
                    <input type="radio" id="attrAce" name="attrNB" value={false} onChange={handleChange} checked/>
                    <label className={styles.titre5} htmlFor="attrAce">Non</label>
                </div>

                <div className={styles.inline}>
                </div>

                <h2 className={styles.titre3}>Le type <br/> de relation que <br/> je recherche</h2>
                <div>
                    <input type="radio" id="diamond" name="relationship" value="0" onChange={handleChange}/>
                    <label className={styles.titre5} htmlFor="diamond">Carreau</label>
                    <p className={styles.titre6}>Pour pratiquer une activité physique régulière</p>
                </div>

                <div>
                    <input type="radio" id="clover" name="relationship" value="1" onChange={handleChange}/>
                    <label className={styles.titre5} htmlFor="Clover">Trèfle</label>
                    <p className={styles.titre6}>On verra où la chance nous mène</p>
                </div>

                <div>
                    <input type="radio" id="spade" name="relationship" value="2" onChange={handleChange}/>
                    <label className={styles.titre5} htmlFor="spade">Pique</label>
                    <p className={styles.titre6}>Et si on pimentait la soirée ?</p>
                </div>

                <div>
                    <input type="radio" id="heart" name="relationship" value="3" onChange={handleChange}/>
                    <label className={styles.titre5} htmlFor="heart">Coeur</label>
                    <p className={styles.titre6}>Je veux trouver l’âme-soeur</p>
                </div>
                <input type ="submit" name="submit" id="submit"/>
            </div>
        </form>
    )
}

export default Form

// Afficher nom + prénom de Paul 
// Faire la même chose pour les 3 autres utilisateur sans boucles sans map
// Faire de même avec un For ou un Map