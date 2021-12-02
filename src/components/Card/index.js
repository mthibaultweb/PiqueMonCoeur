import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./Card.module.css"

const Card = ({ profile }) => {
    return (
        <div key={profile.id} className="card mb-5">
            <div className="card-header">
                {profile.gender === 0 ?
                    <div className={styles.profileImage}>
                        <img src="assets/king.png" alt="king"/>
                    </div>
                    : null
                }
                {profile.gender === 1 ?
                    <div className={styles.profileImage}>
                        <img src="assets/queen.png" alt="queen"/>
                    </div>
                    : null
                }
                {profile.gender === 2 ?
                    <div className={styles.profileImage}>
                        <img src="assets/ace.png" alt="ace"/>
                    </div>
                    : null
                }
                <p className="h5 card-title">{profile.firstName} {profile.lastName}, {profile.age} ans</p>  
                    
                <p className="h6 card-subtitle mb-2 text-muted">
                    {profile.relType === 0 ? "? Pour pratiquer une activité physique régulière" : null}
                    {profile.relType === 1 ? "? On verra où la chance nous mène" : null}
                    {profile.relType === 2 ? "? Et si on pimentait la soirée ?" : null}
                    {profile.relType === 3 ? "? Je veux trouver l’âme-soeur" : null}
                </p>
            </div>

            <div className="card-body">
                <p className="h6 card-text">Je suis attiré·e par</p>
                <ul className="">
                    {profile.attrWomen === true ? <li>Femme</li> : null}
                    {profile.attrMen === true ? <li>Homme</li> : null }
                    {profile.attrNB === true ? <li>Non binaire</li> : null }
                </ul>
                <hr/>
                
                <p className="h6 card-title">Description</p>
                <p className="card-text">{profile.desc}</p>
            </div>
            
            <div className="card-footer">
                <p className="h6 card-text">Réseaux sociaux</p>
                <ul className="list-inline">
                    {profile.insta ?
                        <li className="list-inline-item"><a className="btn btn-dark" href={profile.insta} ><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</a></li>
                        : null
                    }
                    {profile.twitter ?
                        <li className="list-inline-item"><a className="btn btn-dark" href={profile.twitter} ><FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter</a></li>
                        : null
                    }
                    {profile.facebook ?
                        <li className="list-inline-item"><a className="btn btn-dark" href={profile.facebook} ><FontAwesomeIcon icon="fa-brands fa-facebook-f" /> Facebook</a></li>
                        : null
                    }
                    {profile.tikTok ?
                        <li className="list-inline-item"><a className="btn btn-dark" href={profile.tikTok} ><FontAwesomeIcon icon="fa-brands fa-tiktok" /> TikTok</a></li>
                        : null
                    }
                </ul> 
            </div>
        </div>
    )
}

export default Card