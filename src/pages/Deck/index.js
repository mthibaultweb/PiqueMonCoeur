import React, { useContext } from 'react'

import Blind from 'components/Blind'
import Cards from 'components/Cards'
import AppContext from 'contexts/AppContext';
// import Button from '@restart/ui/esm/Button';

const Deck= () => {

    const {selectList, loadSelectList} = useContext(AppContext)

    return (

        <div>
            {loadSelectList()}
            <Cards profiles={selectList} />
            <Blind />
        </div>
    )
}

export default Deck;
