import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import ContactsScreen from './ContactsScreen';
import LoginScreen from './LoginScreen';
import Contacts from './components/Contacts'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      names:["doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity","doreen","dee","charity"]
    }
  }
  render() {
    return (
      <View style={styles.container}>
       {/* <LoginScreen/> */}
       <ContactsScreen/>
      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent:"space-around"
  },
  input: {
    backgroundColor: 'blue', 
    height: 70,
    marginLeft: 12,
    marginBottom:5
  },
 
  button:{
   color:"white",
   fontSize:15
  },

  buttonContainer:{
 marginHorizontal:20,
 backgroundColor:'#27b4e4',
 height:35,
 justifyContent:"center",
 alignItems:"center",
 borderRadius:8
  }
});

export default App;
