import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonNavigate({ navigation, location, children }) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(location)}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        color: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#28b8af",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        width: 251,
        height: 50,
        fontSize: 20,
        marginTop: 20,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
})
