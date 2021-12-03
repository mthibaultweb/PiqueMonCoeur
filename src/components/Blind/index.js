import React, { useContext } from 'react'
import AppContext from 'contexts/AppContext'

import Button from 'components/Button'

const Blind= () => {

    const {jetons, miser, allIn} = useContext(AppContext)

    return (

<div className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark" >
            <div className="container-fluid justify-content-center">
                <input type="number" value={jetons} readOnly />
                <Button className="btn btn-outline-light">Passer</Button>
                <Button className="btn btn-light" onClick={miser}>Miser (1 jetons)</Button>
                <Button className="btn btn-light" onClick={allIn}>All-In (5 jetons)</Button>
            </div>
        </div>
    )
}

export default Blind;
