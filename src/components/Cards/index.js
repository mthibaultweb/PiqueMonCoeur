import React from 'react'
import styles from './Profiles.module.css'

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare)


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
        tikTok: 'squeezie',
        gender: 0,
        attrWomen : true,
        attrMen : true,
        attrNB : false,
        relType : 0,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis metus vel ipsum consectetur posuere. Morbi euismod fringilla tincidunt. Quisque viverra fringilla dapibus. In hac habitasse platea dictumst. Morbi egestas est eu dui rhoncus faucibus sit amet at enim. Morbi dapibus pharetra libero, eu porttitor est fringilla ac. Sed massa nisi, euismod sit amet dictum sit amet, molestie vitae nisi. In vitae ipsum metus. Fusce nisl nunc, imperdiet id tincidunt at, volutpat et lectus. Etiam bibendum augue et odio sagittis, vel mattis mi varius. Nunc at metus ac orci vehicula rutrum. Ut at ultricies lorem, et viverra diam.'
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
        relType : 1,
        desc: ''
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
        relType : 2,
        desc: ''
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
        relType : 3,
        desc: ''
    }

];

const DeckCards = () => {
    return (
        <div className="container-fluid my-5">
            {users.map((user) =>
                <div key={user.id} className="card mb-5">
                    <div className="card-header">
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
                        <p className="h5 card-title">{user.firstName} {user.lastName}, {user.age} ans</p>  
                            
                        <p className="h6 card-subtitle mb-2 text-muted">
                            {user.relType === 0 ? "♦ Pour pratiquer une activité physique régulière" : null}
                            {user.relType === 1 ? "♣ On verra où la chance nous mène" : null}
                            {user.relType === 2 ? "♠ Et si on pimentait la soirée ?" : null}
                            {user.relType === 3 ? "♥ Je veux trouver l’âme-soeur" : null}
                        </p>
                    </div>

                    <div className="card-body">
                        <p className="h6 card-text">Je suis attiré·e par</p>
                        <ul className="">
                            {user.attrWomen === true ? <li class="">Femme</li> : null}
                            {user.attrMen === true ? <li class="">Homme</li> : null }
                            {user.attrNB === true ? <li class="">Non binaire</li> : null }
                        </ul>
                        <hr/>
                        
                        <p className="h6 card-title">Description</p>
                        <p className="card-text">{user.desc}</p>
                    </div>
                    
                    <div className="card-footer">
                        <p className="h6 card-text">Réseaux sociaux</p>
                        <ul className="list-inline">
                            {user.insta ?
                                <li className="list-inline-item"><a className="btn btn-dark" href={user.insta} ><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</a></li>
                                : null
                            }
                            {user.twitter ?
                                <li className="list-inline-item"><a className="btn btn-dark" href={user.twitter} ><FontAwesomeIcon icon="fa-brands fa-twitter" /> Twitter</a></li>
                                : null
                            }
                            {user.facebook ?
                                <li className="list-inline-item"><a className="btn btn-dark" href={user.facebook} ><FontAwesomeIcon icon="fa-brands fa-facebook-f" /> Facebook</a></li>
                                : null
                            }
                            {user.tikTok ?
                                <li className="list-inline-item"><a className="btn btn-dark" href={user.tikTok} ><FontAwesomeIcon icon="fa-brands fa-tiktok" /> TikTok</a></li>
                                : null
                            }
                        </ul> 
                    </div>
                    
                </div>
            )}
        </div>

    )
}

export default DeckCards;