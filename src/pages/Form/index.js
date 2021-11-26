// import React from 'react';
// import { useState } from "react";

// const Form = () => {

//         const [input, setInput] = useState({});
      
//         const handleChange = (event) => {
//           const name = event.target.name;
//           const value = event.target.value;
//           setInput(values => ({...values, [name]: value}))
//         }
      
//         const handleSubmit = (event) => {
//           event.preventDefault();
//           console.log(input);
//         }

//     return (
//         <form>
//             <div>
//                 <h1>Mon profil</h1>
//                 <h2>Ma photo de profil</h2>
//                 <img src="public/profil.jpeg" width="250" height="250" ></img>
//                 <form>
//                 <div>
//                 <input type="file" name="profil" id="profil" accept="png, jpg, jpeg" height="500" width="500" required/><br/>
//                 <input type ="submit" name="submitprofil" id="submitprofil"/>
//                 </div>
//                 </form>
//                 <br/>   
//                 <h2>Mes coordonnées</h2>
               
               
//                 <label for="name">Nom </label><br/>
//                 <input type="text" name="lastname" id="lastname" value={input.lastname || ""} onChange={handleChange} required/>
//                 <br/> 
                
                
//                 <label for="name">Prénom </label> <br/>
//                 <input type="text" name="firstname" id="firstname" required/>
//                 <br/>
//                 <label for="number">Âge </label> <br/>
//                 <input type="tel" name="age" id="name" required/><br/>
//                 <label for="name">Numéro de téléphone </label> <br/>
//                 <input type="text" name="phone" id="phone" required/>
//                 <br/>
//                 <h2>Mes réseaux sociaux</h2>
//                     <label for="name">Instagram </label> <br/>
//                     <input type="url" name="instagram" id="instagram" />
//                 <br/>
//                     <label for="name">Twitter </label> <br/>
//                     <input type="url" name="twitter" id="twitter" />
//                 <br/>
//                     <label for="name">Facebook </label> <br/>
//                     <input type="url" name="facebook" id="facebook" />
//                 <br/>
//                     <label for="name">Tik-Tok </label> <br/>
//                     <input type="url" name="tiktok" id="tiktok" />
//                 <br/>
//                 <h2>Le genre auquel je m'identifie</h2>
//                 <div>
//                     <input type="radio" id="king" name="gender"/>
//                     <label for="king">Roi (Homme)</label>
//                 </div>
//                 <br/>
//                 <div>
//                     <input type="radio" id="queen" name="gender"/>
//                     <label for="queen">Reine (Femme)</label>
//                 </div>
//                 <br/>
//                 <div>
//                     <input type="radio" id="ace" name="gender"/>
//                     <label for="ace">As (Non-binaire)</label>
//                 </div>
//                 <h2>Le type de personne que je recherche</h2>
//                 <div>
//                     <input type="checkbox" id="king" name="gender"/>
//                     <label for="king">Roi (Homme)</label>
//                 </div>
//                 <br/>
//                 <div>
//                     <input type="checkbox" id="queen" name="gender"/>
//                     <label for="queen">Reine (Femme)</label>
//                 </div>
//                 <br/>
//                 <div>
//                     <input type="checkbox" id="ace" name="gender"/>
//                     <label for="ace">As (Non-binaire)</label>
//                 </div>
                   
//                 <br/>
//                 <h2>Le type de relation que je recherche</h2>
//                 <div>
//                     <input type="radio" id="diamond" name="relationship"/>
//                     <label for="diamond">Carreau</label>
//                     <p>Pour pratiquer une activité physique régulière</p>
//                 </div>
//                 <br/>
//                 <div>
//                     <input type="radio" id="clover" name="relationship"/>
//                     <label for="Clover">Trèfle</label>
//                     <p>On verra où la chance nous mène</p>
//                 </div>
//                 <br/>
//                 <div>
//                     <input type="radio" id="spade" name="relationship"/>
//                     <label for="spade">Pique</label>
//                     <p>Et si on pimentait la soirée ?</p>
//                 </div>
//                 <br/>
//                 <div>
//                     <input type="radio" id="heart" name="relationship"/>
//                     <label for="heart">Coeur</label>
//                     <p>Je veux trouver l’âme-soeur</p>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default Form


