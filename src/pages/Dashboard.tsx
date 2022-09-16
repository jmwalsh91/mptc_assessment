import React from 'react'
import { UserContext } from '~/components/contexts/UserProvider'
import StaffDash from '~/components/dash/StaffDash'
import StudentDash from '~/components/dash/StudentDash'

type Props = {}

function Dashboard({}: Props) {
  const role = React.useContext(UserContext).role
  return (
    <>
    {role === 'student' ? <StudentDash/> : <StaffDash/>}
 </>
  )
}

export default Dashboard