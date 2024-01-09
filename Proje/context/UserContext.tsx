import { createContext, useState } from "react";

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: any) => {

    const [users, setUsers] = useState(["Ali", "Çağatay", "Ayşe"]);
    
    return <UserContext.Provider value={{ users, setUsers }}>
        {children}
    </UserContext.Provider>
}

export interface UserContextType {
    users: string[];
    setUsers: (users: string[]) => void;
}