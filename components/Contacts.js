import React from 'react';
import {Text, View,Image, StyleSheet } from 'react-native';
import { MaterialIcons,MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'; 

export default function Contacts({name,phone}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/tissuedp.jpg')} style={styles.image} />

            <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text>{phone}</Text>
            </View>

            <View style={styles.icon}>
                <MaterialIcons name='local-phone' size={25} color="#05aff7"/>
            </View>

            <View>
                <MaterialCommunityIcons name='message-processing' size={25} color="#05aff7"/>
            </View>

            <View>
                <SimpleLineIcons name='options-vertical' size={25} color="#8f9394"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
 container:{
     flexDirection:"row",
     marginHorizontal:20,
     alignItems:"center",
     marginVertical:10
 },
 image:{
    width:60, 
    height:60,
    borderRadius:60
 },
 infoContainer:{
     justifyContent:"center",
     marginHorizontal:15,
     flex:4
 },
 name:{
     fontWeight:"bold",
     fontSize:18
 },
 icon:{
     flex:1
 }
})
