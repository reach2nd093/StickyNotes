import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>STICKY NOTES</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: "20%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: "#17487A",
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 40
    }
})
