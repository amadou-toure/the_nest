import { StyleSheet, Text, View, TextInput, Button, ImageBackground, StatusBar, Pressable } from "react-native";
import { Link } from "expo-router";
import * as React from 'react';
import bg from '../assets/img/login_bg.png'




export default function LogIn() {
  return (
    
      <ImageBackground source={bg} blurRadius={1} style={{  flex: 1,
        justifyContent: 'center',}}>
          <StatusBar  />
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.subtitle}>Connexion</Text>
      </View>
      <View style={styles.main}>
        <TextInput style={{width:'100%',justifyContent: "center",
    alignItems: "stretch",
    borderBottomWidth: 3,
    height: 50,
    borderColor: "#FFFFFF",}}
          placeholder="Email"
          placeholderTextColor="#fff"  />
        <TextInput style={{width:'100%',justifyContent: "center",
    alignItems: "stretch",
    borderBottomWidth: 3,
    height: 50,
    borderColor: "#FFFFFF",}}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#fff" 
        />
          
      </View>
      <Pressable style={{
    alignItems: 'center',
    justifyContent:'center',
    marginTop:"10%",
    backgroundColor: '#DDDDDD',
    width:'70%',
    height: '7%',
    borderRadius:8,
    marginBottom:0
  }}>
    <Text>Valider</Text>
      </Pressable>
      <View style={styles.footer}>
        <Text style={{color:"white"}}>vous n'avez pas encore de compte ?  </Text><Link href='/signin'style={{color:'cyan',textDecorationLine: 'underline'}}>inscrivez vous</Link>
      </View >
      </View>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
      alignItems: "center",
      padding: 24,
    },
    footer:{
        flex: 2,
      alignItems: "center",
      flexDirection:'column',
      justifyContent:'flex-end',
      padding: 2,
    },
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    main: {
      flex: 2,
      justifyContent: "space-around",
      flexDirection: 'column',
      alignItems: 'flex-start',
      width:'90%',
      maxWidth: 960,
      marginHorizontal: "2px",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
      color: 'white'
    },
    subtitle: {
      fontSize: 36,
      color: "#fff",
    },
  });
  