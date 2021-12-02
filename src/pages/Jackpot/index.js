import React, { useContext, useMemo } from 'react'
import Cards from 'components/Cards'
import AppContext from "contexts/AppContext"


const Jackpot = () => {
  const {profiles} = useContext(AppContext)


  const jackpotUsers = useMemo(() => {
        return profiles.filter((profile) => {
            return profile.id === 3
        })
    }, [profiles])
  return (

    <div>

      <Cards profiles={jackpotUsers} />
    </div>
  )
}

export default Jackpot;
