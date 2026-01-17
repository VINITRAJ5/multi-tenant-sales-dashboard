import { createContext, useContext, useState } from 'react'


const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
const [tenant, setTenant] = useState('A')
const [role, setRole] = useState('Admin')


return (
<AuthContext.Provider value={{ tenant, role, setTenant, setRole }}>
{children}
</AuthContext.Provider>
)
}


export const useAuth = () => useContext(AuthContext)