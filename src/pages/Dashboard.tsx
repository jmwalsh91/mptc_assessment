import React from 'react'

import { UserContext } from '~/components/contexts/UserProvider'
import StaffDash from '~/components/dash/StaffDash'
import StudentDash from '~/components/dash/StudentDash'

function Dashboard() {
  const role = React.useContext(UserContext).role
  return <>{role === 'Student' ? <StudentDash /> : <StaffDash />}</>
}

export default Dashboard
