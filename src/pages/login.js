import { View, StyleSheet, TextInput, Text, ImageBackground } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import ButtonNavigate from "../components/button"
import TitleMaster from "../components/title"
import img from "../assets/xereco.jpg"

export default function Login() {

  const navigation = useNavigation()
  
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.image}>

      <TitleMaster>Bem-vindo!</TitleMaster>
      <Text style={styles.subt}>Faça o seu login!</Text>

      <TextInput placeholder="User" style={styles.campo} />
      <TextInput placeholder="Password" secureTextEntry="true" style={styles.campo} />


      <ButtonNavigate style={styles.btn} location='HomeScreen' navigation={navigation} >
        Login
      </ButtonNavigate>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subt: {
    fontSize: 25,
    color: "black",
    textShadowColor: "black",
    textShadowRadius: 2,
    marginBottom: 20,
  },
  campo: {
    color: 'black',
    fontSize: 20,
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#69d2cd',
    padding: 10,
  },
})
