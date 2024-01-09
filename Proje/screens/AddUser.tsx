import { View, Text, Pressable, Button, FlatList, SafeAreaView, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext, UserContextType } from '../context/UserContext'

const AddUser = ({ navigation }: any) => {
    const [newUser, setNewUser] = useState("");
    const {users, setUsers} = useContext(UserContext) as UserContextType;

    function addUser() {
        setUsers([...users, newUser]);
        navigation.navigate('UserList');
    }
    return (<>
        <View style={{ flex: 1 }}>
            <TextInput
                onChangeText={(e) => setNewUser(e)}
                value={newUser}
                placeholder="User name"
                />
            <Button
                onPress={addUser}
                title="Add"
                />
        </View>
        </>)
}

export default AddUser