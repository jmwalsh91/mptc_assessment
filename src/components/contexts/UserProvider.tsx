import React from 'react'

type Props = {
    children: React.ReactNode
}

const UserContext = React.createContext({role: null, name: null})
function UserProvider({children}: Props) {
    const [role, setRole] = React.useState(null)
    const [name, setName] = React.useState(null)
    const UserDispatcher = React.createContext({setRole, setName})
    
    const value = {role, name}
    const dispatchValue = {setRole, setName}



  return (
    <UserContext.Provider value={value}>
        <UserDispatcher.Provider value={dispatchValue}>
        {children}
        </UserDispatcher.Provider>
        </UserContext.Provider>
  )
}

export default UserProvider