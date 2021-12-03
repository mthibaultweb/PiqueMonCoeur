import React, { useContext } from 'react'
import AppContext from 'contexts/AppContext'

import Button from 'components/Button'

const Blind= () => {

    const {jetons, miser, allIn} = useContext(AppContext)
    // const [time, setTime] = React.useState(0)

    // useEffect(() => {
    //     if(jetons < 20) {
    //         const timeout = setTimeout(() => {
    //             setTime(time + 1)
    //         },1000)
    
    //         return () => clearTimeout(timeout)
    //     }
    // }, [jetons, time]);

    return (

<div className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark" >
            <div className="container-fluid justify-content-center">
                <input type="number" value={jetons} readOnly />
                <Button className="btn btn-outline-light">Passer</Button>
                <Button className="btn btn-light" action={miser}>Miser (1 jetons)</Button>
                <Button className="btn btn-light" action={allIn}>All-In (5 jetons)</Button>
            </div>
        </div>
    )
}

export default Blind;
