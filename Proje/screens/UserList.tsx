import { View, Text, Pressable, Button, FlatList, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { UserContext, UserContextType } from '../context/UserContext'

const UserList = ({ navigation }: any) => {
    const {users, setUsers} = useContext(UserContext) as UserContextType

    return (<>
        <View style={{ flex: 1 }}>
            <FlatList
                data={users}
                renderItem={({item}) => <Text>{item}</Text>}
                />
        </View>
        </>)
}

export default UserList