import React, { useEffect } from 'react'
import clsx from 'clsx';

import Button from 'components/Button'
import Profiles from 'components/Profiles'

const Feed= () => {

    const initJetons = 20;
    const [jetons, setJetons] = React.useState(initJetons)

    const miser = () => {
        timer()
        jetons >= 1 ?
        setJetons(parseFloat(jetons)-1)
        : alert("Vous n'avez plus de jetons");
    }

    const allIn = () => {
        timer()
        jetons >= 5 ?
        setJetons(parseFloat(jetons)-5)
        : alert("Vous n'avez plus assez de jetons");
    }


    const timer = () => {
        if(jetons < 20) {
            setInterval(console.log(new Date().toLocaleTimeString()), 1000)
        }
        
    }



    const [time, setTime] = React.useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTime(time + 1)
        },1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [time]);

    console.log(time)

    return (



        <div>
            <Profiles />
            <input type="number" value={jetons} readOnly />
            <Button action={miser}>Miser (1 jetons)</Button>
            <Button action={allIn}>All-In (5 jetons)</Button>
            <Button>Passer</Button>
        </div>
    )
}

export default Feed;
