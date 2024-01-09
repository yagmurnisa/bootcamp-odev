import { View, Text, Pressable, Button, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { UserContext, UserContextType } from '../context/UserContext'

const HomeScreen = ({ navigation }: any) => {

    return (<>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Pressable style={{ width: '40%', height: 200, borderStyle: 'solid', borderWidth: 2 }}
             onPress={() => navigation.navigate('AddUser')}>
                <View>
                    <Text>Add User</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('UserList')} 
            style={{ width: '40%', height: 200, borderStyle: 'solid', borderWidth: 2 }}>
                <View>
                    <Text>User List</Text>
                </View>
            </Pressable>
            </View>
        </>)
}

export default HomeScreen