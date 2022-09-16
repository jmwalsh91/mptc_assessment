import React from 'react'
import { UserContext } from '../contexts/UserProvider'

type Props = {children: React.ReactNode}

function UserRequired({children}: Props) {
const user = React.useContext(UserContext)


  return (
    
  )
}

export default UserRequired