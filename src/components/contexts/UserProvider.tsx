import React from 'react'

type Props = {
    children: React.ReactNode
}
export interface DispatchValue {
    setRole: React.Dispatch<React.SetStateAction<string>>
    setName: React.Dispatch<React.SetStateAction<string>>
}
export interface UserContext {
    role: string | undefined
    name: string | undefined
}
export const UserContext = React.createContext<UserContext>({role: undefined!, name: undefined!})
export const UserDispatcher = React.createContext<DispatchValue>(undefined!)
/**
 * Provide ways to set and consume user data
 */
function UserProvider({children}: Props) {
    const [role, setRole] = React.useState("none")
    const [name, setName] = React.useState("none")
   
    
    const value = {role, name}
    const dispatchValue = {setRole: setRole, setName: setName}



  return (
    <UserContext.Provider value={value}>
        <UserDispatcher.Provider value={dispatchValue}>
        {children}
        </UserDispatcher.Provider>
        </UserContext.Provider>
  )
}

export default UserProvider