import { Container } from '@mantine/core'
import React from 'react'
import { UserContext } from '../contexts/UserProvider'
import AdvDash from './AdvDash'
import RegDash from './RegDash'

type Props = {}

function StaffDash({}: Props) {
    const role = React.useContext(UserContext).role
  return (
    <Container fluid>
        {role === 'adv' ? <AdvDash/> : null}
        {role === 'reg' ? <RegDash/> : null}
    </Container>
  )
}

export default StaffDash