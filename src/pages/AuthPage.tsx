import React from 'react'
import Login from '~/forms/Login'
import { UserContext } from '../components/contexts/UserProvider'


type Props = {}

function AuthPage({}: Props) {
    const user = React.useContext(UserContext)

  return (
    <>
    {
        user.name === undefined  ? <Login/> : null
    }
    </>
  )
}

export default AuthPage