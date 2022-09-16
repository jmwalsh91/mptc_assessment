import { Container } from '@mantine/core'
import React from 'react'

import { UserContext } from '../contexts/UserProvider'
import AdvDash from './AdvDash'
import RegDash from './RegDash'

export default function StaffDash() {
  const role = React.useContext(UserContext).role
  return (
    <Container fluid>
      {role === 'Adv' ? <AdvDash /> : null}
      {role === 'Reg' ? <RegDash /> : null}
    </Container>
  )
}
