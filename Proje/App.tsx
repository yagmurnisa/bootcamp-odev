import { View, Text } from 'react-native'
import React from 'react'
import { UserProvider } from './context/UserContext'
import Start from './Start'

const App = () => {
    return (<>
        <UserProvider>
            <Start />
        </UserProvider>
    </>
  )
}

export default App