import React, { useEffect } from 'react'

import Button from 'components/Button'

const Blind= () => {

    const initJetons = 20;
    const [jetons, setJetons] = React.useState(initJetons)

    const miser = () => {
        jetons >= 1 ?
        setJetons(parseFloat(jetons)-1)
        : alert("Vous n'avez plus de jetons");
    }

    const allIn = () => {
        jetons >= 5 ?
        setJetons(parseFloat(jetons)-5)
        : alert("Vous n'avez plus assez de jetons");
    }

    const [time, setTime] = React.useState(0)

    useEffect(() => {
        if(jetons < 20) {
            const timeout = setTimeout(() => {
                setTime(time + 1)
            },1000)
    
            return () => clearTimeout(timeout)
        }
    }, [jetons, time]);

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
