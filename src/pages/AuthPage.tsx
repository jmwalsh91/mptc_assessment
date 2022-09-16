import { Text } from '@mantine/core'
import React from 'react'

import { UserContext } from '../components/contexts/UserProvider'

import Login from '~/forms/Login'

function AuthPage() {
  const user = React.useContext(UserContext)

  return <>{user.name === 'none' ? <Login /> : <Text>{user.name}</Text>}</>
}

export default AuthPage
