import React from 'react'
import Login from '~/forms/Login'
import { UserContext } from '../components/contexts/UserProvider'
import {Text} from '@mantine/core'

type Props = {}

function AuthPage({}: Props) {
    const user = React.useContext(UserContext)

  return (
    <>
    {
        user.name === "none"  ? <Login/> : <Text>{user.name}</Text>
    }
    </>
  )
}

export default AuthPage