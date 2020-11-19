import React from 'react';
import { FlatList, View,Text } from 'react-native';
import Contacts from "./components/Contacts"

const ContactsScreen = () => {
    contacts = [
        { name: "ama mensah", number: "2324235535" },
        { name: "jone man", number: "780235535" },
        { name: "gerry annan", number: "2390099009835" },
        { name: "gabby lot", number: "23242359535" },
        { name: "junior addo", number: "777777777777" },
        { name: "comfort hardy", number: "54345435535" },
        { name: "feddy nana", number: "097645566365" },
        { name: "clara ayi", number: "9345788535" },
        { name: "nana king", number: "7645566365" },
    ]
    return (
        <View>
            <FlatList
                data={contacts}
                renderItem={({ item }) => {
                    return <Contacts name={item.name} phone={item.number} />
                }}
                keyExtractor={(item) => item.number}
            />
        </View>
    );
}

export default ContactsScreen;
