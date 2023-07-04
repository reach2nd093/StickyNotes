import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Note = ({note}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {note.title}
            </Text>
            <Text style={styles.description}>
                {note.description}
            </Text>
        </View>
    )
}

export default Note;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        marginVertical: 10,
    },
    title: {
        color: "#17487A",
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: 'bold',
    },
    description:{
        color: "#666",
        fontSize: 16,
        paddingVertical: 10,
    }
})
