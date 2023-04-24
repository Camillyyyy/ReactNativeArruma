import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ButtonNavigate from '../components/button'
import TitleMaster from "../components/title"


export default function HomeScreen({route}) {

    const navigation = useNavigation()
    const Data = route.params.data;

debugger

    return (
        <View style={styles.container}>

            <View style={styles.v2}>
                <TitleMaster>Atividades</TitleMaster>

                <Text style={styles.subt}>Total: {Data ? Data.length : 0} </Text>

                <ButtonNavigate location='ActivityScreen' navigation={navigation} >
                    Entrar
                </ButtonNavigate>
            </View>

            <ButtonNavigate location='Login' navigation={navigation}  >
                Sair
            </ButtonNavigate>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    subt: {
        fontSize: 25,
        color: "black",
        textShadowColor: "black",
        textShadowRadius: 2,
        marginBottom: 20,
        textAlign: 'center',


    },
    v2: {
        backgroundColor: '#69d2cd',
        borderWidth: 1,
        borderRadius: 10,
    },
})