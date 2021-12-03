import React, { useContext } from 'react';
import { useState } from "react";
import styles from "./Form.module.css";
import clsx from 'clsx';
import AppContext from 'contexts/AppContext'

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare)

const Form = ({className}) => {

    const {showForm, userInfos, changeUserInfos} = useContext(AppContext)
    // const {userProfile, setUserProfile} = useState('');

    const [input, setInput] = useState({});
    
    const loadForm = () => {
        if(showForm) {

            // Object.keys(userInfos).forEach(key => {
            //     const name = key.name;
            //     const value = key.value;
            //     setInput(values => ({...values, [name]: value}))
            // });
            
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)

        const newUserInfos = {
            id: 0,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            age: formData.get('age'),
            phone: formData.get('phone'),
            insta: formData.get('insta'),
            twitter: formData.get('twitter'),
            facebook: formData.get('facebook'),
            tikTok: formData.get('tikTok'),
            gender: formData.get('gender'),
            attrWomen : formData.get('attrWomen'),
            attrMen : formData.get('attrMen'),
            attrNB : formData.get('attrNB'),
            relType : formData.get('relType'),
            desc: formData.get('desc')
        }

        changeUserInfos(newUserInfos)
    }

    return (
        <form className={clsx(styles.form, {[styles.hideForm] : !showForm})} onSubmit={handleSubmit}>
            {loadForm()}
            <div className={styles.alignement}>
                <h1 className={styles.titre}>Mon profil</h1>

                <h2 className={styles.titre2}>Mes coordonnées</h2>
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="lastName">Nom </label><br/>
                    <input type="text" name="lastName" id="lastName" value={input.lastName} onChange={handleChange}/>
                </div>

                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="firstName">Prénom </label> <br/>
                    <input type="text" name="firstName" id="firstName" value={input.firstName} onChange={handleChange}/> 
                </div>
                
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="age">Âge </label> <br/>
                    <input type="number" name="age" id="age" value={input.age} onChange={handleChange}/><br/>
                </div>

                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="phone">Numéro de téléphone </label> <br/>
                    <input type="phone" name="phone" id="phone" value={input.phone} onChange={handleChange}/>
                </div>
                
                <div className={styles.inline}>
                </div>

                <h2 className={styles.titre3}>Je me décris briévement</h2>

                <div className={styles.inputBlock}>
                <label className={styles.titreform} htmlFor="desc">Description </label><br/>
                <textarea type="text" name="desc" id="desc" value={input.desc} onChange={handleChange}/>
                </div>

                <div className={styles.inline}>
                </div>
                
                <div className={styles.inputBlock}>
                <h2 className={styles.titre3}>Mes réseaux sociaux</h2>
                    <label className={styles.titreform} htmlFor="insta">Instagram </label> <br/>
                    <input type="url" name="insta" id="insta" value={input.insta} onChange={handleChange} />
                </div>

                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="twitter">Twitter </label> <br/>
                    <input type="url" name="twitter" id="twitter" value={input.twitter} onChange={handleChange} />
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="facebook">Facebook </label> <br/>
                    <input type="url" name="facebook" id="facebook" value={input.facebook} onChange={handleChange} />
               </div>
               <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="tikTok">Tik-Tok </label> <br/>
                    <input type="url" name="tikTok" id="tikTok" value={input.tikTok} onChange={handleChange} />
               </div>

               <div className={styles.inline}>
                </div>

               <div className={styles.inputBlock}>
                <h2 className={styles.titre3}>Le genre auquel <br/> je m'identifie</h2>
                </div>

                <div className={styles.inputBlock}>
                    <input type="radio" id="king" name="gender" value="0" onChange={handleChange} checked={input.gender === "0"} />
                    <label className={styles.titre5} htmlFor="king">Roi (Homme)</label>
                </div>

                <div className={styles.inputBlock}>
                    <input type="radio" id="queen" name="gender" value="1" onChange={handleChange} checked={input.gender === "1"} />
                    <label className={styles.titre5} htmlFor="queen">Reine (Femme)</label>
                </div>
                <div className={styles.inputBlock}>
                    <input type="radio" id="ace" name="gender" value="2" onChange={handleChange} checked={input.gender === "2"} />
                    <label className={styles.titre5} htmlFor="ace">As (Non-binaire)</label>
                </div>

                <div className={styles.inline}>
                </div>

                <h2 className={styles.titre3}>Le type de personne que je recherche</h2>
                <div>
                    <h3 className="h5">Roi (Homme)</h3>
                    <input type="radio" id="attrMen" name="attrMen" value="1" onChange={handleChange} checked={input.attrMen === "1"} />
                    <label htmlFor="attrMen">Oui</label>  <br/>
                    <input type="radio" id="attrMen" name="attrMen" value="0" onChange={handleChange} checked={input.attrMen === "0"} />
                    <label htmlFor="attrMen">Non</label>
                </div>
                <div>
                    <h3 className="h5">Reine (Femme)</h3>
                    <input type="radio" id="attrWomen" name="attrWomen" value="1" onChange={handleChange} checked={input.attrWomen === "1"} />
                    <label htmlFor="attrWomen">Oui</label>  <br/>
                    <input type="radio" id="attrWomen" name="attrWomen" value="0" onChange={handleChange} checked={input.attrWomen === "0"} />
                    <label htmlFor="attrWomen">Non</label>

                </div>

                <div>
                    <h3 className="h5">As (Non-binaire)</h3>
                    <input type="radio" id="attrNB" name="attrNB" value="1" onChange={handleChange} checked={input.attrNB === "1"} />
                    <label htmlFor="attrNB">Oui</label>  <br/>
                    <input type="radio" id="attrNB" name="attrNB" value="0" onChange={handleChange} checked={input.attrNB === "0"} />
                    <label htmlFor="attrNB">Non</label>
                </div>

                <h2 className={styles.titre3}>Le type <br/> de relation que <br/> je recherche</h2>
                <div>
                    <input type="radio" id="diamond" name="relType" value="0" onChange={handleChange} checked={input.relType === "0"} />
                    <label htmlFor="diamond">Carreau</label>
                    <p>Pour pratiquer une activité physique régulière</p>
                </div>

                <div>
                    <input type="radio" id="clover" name="relType" value="1" onChange={handleChange} checked={input.relType === "1"} />
                    <label htmlFor="clover">Trèfle</label>
                    <p>On verra où la chance nous mène</p>
                </div>

                <div>
                    <input type="radio" id="spade" name="relType" value="2" onChange={handleChange} checked={input.relType === "2"} />
                    <label htmlFor="spade">Pique</label>
                    <p>Et si on pimentait la soirée ?</p>
                </div>

                <div>
                    <input type="radio" id="heart" name="relType" value="3" onChange={handleChange} checked={input.relType === "3"} />
                    <label htmlFor="heart">Coeur</label>
                    <p>Je veux trouver l’âme-soeur</p>
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