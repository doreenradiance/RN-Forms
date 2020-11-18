import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import LoginScreen from './LoginScreen';


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
       <LoginScreen/>
      














        {/*
        <TextInput
          style={styles.input}
          placeholder='email'
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.email}
          onChangeText={(email) => {
            this.setState({ email: email })
          }}
        />

        <TextInput
          style={styles.input}
          placeholder='password'
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => {
            this.setState({ password: password })
          }}
        />

        <TouchableOpacity  style={styles.buttonContainer}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
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
