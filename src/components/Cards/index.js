import React from 'react'
// import styles from './Profiles.module.css'
// import AppContext from 'contexts/AppContext'

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from '../Card'

library.add(fab, faCheckSquare)

const DeckCards = ({ profiles = [] }) => {
    if (!profiles.length) {
        return "Pas de cartes à afficher"
    }
    return (
        <div className="container-fluid my-5">
            {profiles.map((profile) =>
                <Card profile={profile} />
            )}
        </div>

    )
}

export default DeckCards;