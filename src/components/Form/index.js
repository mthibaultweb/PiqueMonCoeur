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

    const {showForm, changeUserInfos} = useContext(AppContext)
    // const {userProfile, setUserProfile} = useState('');

    const [input, setInput] = useState({});
    
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
            firstName: formData.get('firstname'),
            lastName: formData.get('lastname'),
            age: formData.get('age'),
            phone: formData.get('phone'),
            insta: formData.get('instagram'),
            twitter: formData.get('twitter'),
            facebook: formData.get('facebook'),
            tikTok: formData.get('tiktok'),
            gender: formData.get('gender'),
            attrWomen : formData.get('attrWomen'),
            attrMen : formData.get('attrMen'),
            attrNB : formData.get('attrNB'),
            relType : formData.get('relationship'),
            desc: formData.get('description')
        }

        changeUserInfos(newUserInfos)

    }
    return (

        <form className={clsx(styles.form, {[styles.hideForm] : !showForm})} onSubmit={handleSubmit}>
            <div className={styles.alignement}>
                <h1 className={styles.titre}>Mon profil</h1>

                <h2 className={styles.titre2}>Mes coordonnées</h2>
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="lastname">Nom </label><br/>
                    <input type="text" name="lastname" id="lastname" value={input.lastname || ""} onChange={handleChange} required/>
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="firstname">Prénom </label> <br/>
                    <input type="text" name="firstname" id="firstname" value={input.firstname || ""} onChange={handleChange} required/> 
                </div>
                
                <div className={styles.inputBlock}>
                    <label className={styles.titreform} htmlFor="age">Âge </label> <br/>
                    <input type="number" name="age" id="age" value={input.age || ""} onChange={handleChange} required/><br/>
                </div>

                <div className={styles.inputBlock}>
                    <label htmlFor="phone">Numéro de téléphone </label> <br/>
                    <input type="phone" name="phone" id="phone" value={input.phone || ""} onChange={handleChange} required/>
                </div>
                
                <h2 className={styles.titre2}>Ma description</h2>
                <label htmlFor="description">Description </label><br/>
                <textarea type="text" name="description" id="description" value={input.description || ""} onChange={handleChange} required/>
                <h2 className={styles.titre2}>Mes réseaux sociaux</h2>
                    <label htmlFor="name">Instagram </label> <br/>
                    <input type="url" name="instagram" id="instagram" value={input.instagram || ""} onChange={handleChange} />
                <br/>
                    <label htmlFor="twitter">Twitter </label> <br/>
                    <input type="url" name="twitter" id="twitter" value={input.twitter || ""} onChange={handleChange} />
                <br/>
                    <label htmlFor="facebook">Facebook </label> <br/>
                    <input type="url" name="facebook" id="facebook" value={input.facebook || ""} onChange={handleChange} />
                <br/>
                    <label htmlFor="tiktok">Tik-Tok </label> <br/>
                    <input type="url" name="tiktok" id="tiktok" value={input.tiktok || ""} onChange={handleChange} />
                <br/>
                <h2>Le genre auquel je m'identifie</h2>
                <div>
                    <input type="radio" id="king" name="gender" value="0" />
                    <label htmlFor="king">Roi (Homme)</label>
                </div>
                <br/>
                <div>
                    <input type="radio" id="queen" name="gender" value="1" />
                    <label htmlFor="queen">Reine (Femme)</label>
                </div>
                <br/>
                <div>
                    <input type="radio" id="ace" name="gender" value="2" />
                    <label htmlFor="ace">As (Non-binaire)</label>
                </div>
                <h2>Le type de personne que je recherche</h2>
                <div>
                    <h3 className="h5">Roi (Homme)</h3>
                    <input type="radio" id="attrKing" name="attrMen" value={true}/>
                    <label htmlFor="attrKing">Oui</label>  <br/>
                    <input type="radio" id="attrKing" name="attrMen" value={false}/>
                    <label htmlFor="attrKing">Non</label>
                </div>
                <br/>
                <div>
                    <h3 className="h5">Reine (Femme)</h3>
                    <input type="radio" id="attrQueen" name="attrWomen" value={true}/>
                    <label htmlFor="attrQueen">Oui</label>  <br/>
                    <input type="radio" id="attrQueen" name="attrWomen" value={false} />
                    <label htmlFor="attrQueen">Non</label>

                </div>
                <br/>
                <div>
                    <h3 className="h5">As (Non-binaire)</h3>
                    <input type="radio" id="attrAce" name="attrNB" value={true}/>
                    <label htmlFor="attrAce">Oui</label>  <br/>
                    <input type="radio" id="attrAce" name="attrNB" value={false}/>
                    <label htmlFor="attrAce">Non</label>
                </div>
                   
                <br/>
                <h2>Le type de relation que je recherche</h2>
                <div>
                    <input type="radio" id="diamond" name="relationship" value="0" />
                    <label htmlFor="diamond">Carreau</label>
                    <p>Pour pratiquer une activité physique régulière</p>
                </div>
                <br/>
                <div>
                    <input type="radio" id="clover" name="relationship" value="1" />
                    <label htmlFor="Clover">Trèfle</label>
                    <p>On verra où la chance nous mène</p>
                </div>
                <br/>
                <div>
                    <input type="radio" id="spade" name="relationship" value="2" />
                    <label htmlFor="spade">Pique</label>
                    <p>Et si on pimentait la soirée ?</p>
                </div>
                <br/>
                <div>
                    <input type="radio" id="heart" name="relationship" value="3" />
                    <label htmlFor="heart">Coeur</label>
                    <p>Je veux trouver l’âme-soeur</p>
                </div>
                <input type ="submit" name="submit" id="submit"/>
            </div>
        </form>
    )
}

export default Form


