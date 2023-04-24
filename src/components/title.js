import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TitleMaster({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 50,
        textShadowColor: "black",
        textShadowRadius: 10,
        textAlign: "center",
    },
})