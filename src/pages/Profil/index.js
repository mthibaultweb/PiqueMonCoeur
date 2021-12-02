import React, { useContext } from 'react'
import Form from 'components/Form'
import Button from 'components/Button'
import AppContext from 'contexts/AppContext'
import UserInfos from '../../components/UserInfos'

const Profil= () => {

  const {toggleForm} = useContext(AppContext)

  return (
    <div className="container pt-5 d-flex flex-column align-items-center">
      <UserInfos/>
      <Button className="btn btn-dark fit-content" onClick={toggleForm}>Modifier mon profil</Button>
      <Form/>
      
    </div>
  )
}

export default Profil;
