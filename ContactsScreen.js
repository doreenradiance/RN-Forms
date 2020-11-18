import React from 'react';
import { FlatList, View } from 'react-native';

const ContactsScreen = () => {
    contacts = [
        { name: "ama mensah", number: "2324235535" },
        { name: "jone mensah", number: "780235535" },
        { name: "gerry annan", number: "2390099009835" },
        { name: "gabby lot", number: "2324235535" },
        { name: "junior addo", number: "777777777777" },
        { name: "clara ayi", number: "54345435535" },
        { name: "feddy nana", number: "097645566365" }
    ]
    return (
        <View>
            <FlatList
                data={contacts}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
                keyExtractor={(item)=>item.number}
            />
        </View>
    );
}

export default ContactsScreen;
