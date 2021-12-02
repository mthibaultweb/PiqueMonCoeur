import React, { useContext, useMemo } from 'react'

import Blind from 'components/Blind'
import DeckCards from 'components/Cards'
import AppContext from 'contexts/AppContext';
// import Button from '@restart/ui/esm/Button';

const Deck= () => {

    const {profiles} = useContext(AppContext)

    const deckUsers = useMemo(() => {
        return profiles.filter((profile) => {
            return profile.gender === 0 
        })
    }, [profiles])

    return (

        <div>
            <DeckCards profiles={deckUsers} />
            <Blind />
        </div>
    )
}

export default Deck;
