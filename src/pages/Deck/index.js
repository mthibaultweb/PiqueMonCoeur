import React, { useEffect } from 'react'
import clsx from 'clsx';

import Blind from 'components/Blind'
import DeckCards from 'components/Cards'

const Deck= () => {

    return (

        <div>
            <DeckCards />
            <Blind />
        </div>
    )
}

export default Deck;
