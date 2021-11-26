import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'

const Profiles = () => {
    
    const users = [
        {
            id: 1,
            firstName: 'Paul',
            lastName: 'Thomas',
            age: 36,
            phone: '0623458972',
            insta: 'mthibaultweb',
            twitter: 'ubmontaigne',
            facebook: 'mmibordeaux',
            tikTok: '',
            gender: 0,
            attrWomen : true,
            attrMen : true,
            attrNB : false,
            relType : 0
        },
        {
            id: 2,
            firstName: 'Robert',
            lastName: 'Durand',
            age: 52,
            phone: '0623458972',
            insta: '',
            twitter: '',
            facebook: '',
            tikTok: '',
            gender: 0,
            attrWomen : true,
            attrMen : false,
            attrNB : false,
            relType : 1
        },
        {
            id: 3,
            firstName: 'Ginette',
            lastName: 'Gomez',
            age: 47,
            phone: '',
            insta: '',
            twitter: '',
            facebook: '',
            tikTok: '',
            gender: 1,
            attrWomen : true,
            attrMen : true,
            attrNB : true,
            relType : 2
        },
        {
            id: 4,
            firstName: 'Chris',
            lastName: 'Roussel',
            age: 47,
            phone: '',
            insta: '',
            twitter: '',
            facebook: '',
            tikTok: '',
            gender: 2,
            attrWomen : true,
            attrMen : true,
            attrNB : true,
            relType : 3
        }

    ];

    return (
        <div>
            {users.map((user) =>
                <div className={styles.profileCard} >
                    <div className={styles.profileTitle}>
                        {user.gender === 0 ?
                            <div className={styles.profileImage}>
                                <img src="assets/king.png" alt="king"/>
                            </div>
                            : null
                        }
                        {user.gender === 1 ?
                            <div className={styles.profileImage}>
                                <img src="assets/queen.png" alt="queen"/>
                            </div>
                            : null
                        }
                        {user.gender === 2 ?
                            <div className={styles.profileImage}>
                                <img src="assets/ace.png" alt="ace"/>
                            </div>
                            : null
                        }
                        <p>{user.firstName} {user.lastName}, {user.age} ans</p>
                    </div>
                    {user.relType === 0 ?
                        <p>♦ Pour pratiquer une activité physique régulière</p>
                        : null
                    }
                    {user.relType === 1 ?
                        <p>♣ On verra où la chance nous mène</p>
                        : null
                    }
                    {user.relType === 2 ?
                        <p>♠ Et si on pimentait la soirée ?</p>
                        : null
                    }
                    {user.relType === 3 ?
                        <p>♥ Je veux trouver l’âme-soeur</p>
                        : null
                    }
                      
                    <p>Je suis attiré·e par :</p>
                    <ul>
                        {user.attrWomen === true ? <li>Femme</li> : null}
                        {user.attrMen === true ? <li>Homme</li> : null }
                        {user.attrNB === true ? <li>Non binaire</li> : null }
                    </ul>
                    <p>Réseaux sociaux</p>
                    <ul className={styles.socialsList}>
                        {user.insta ?
                            <li><a href={"https://www.instagram.com/" + user.insta} >Instagram : @{user.insta}</a></li>
                            : null
                        }
                        {user.twitter ?
                            <li><a href={"https://twitter.com/" + user.twitter} >Twitter : @{user.twitter}</a></li>
                            : null
                        }
                        {user.facebook ?
                            <li><a href={"https://www.facebook.com/" + user.facebook} >Facebook : @{user.facebook}</a></li>
                            : null
                        }
                        {user.tikTok ?
                            <li>TikTok : {user.tikTok}</li>
                            : null
                        }
                    </ul> 
                </div>
            )}
        </div>
       
    )
}

export default Profiles;