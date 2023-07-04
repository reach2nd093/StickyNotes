import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const AddNote = ({onSave}) => {
    const [note, setNote] = useState({
        title: "",
        description: ""
    })

    const handleSubmit = () => {
        if(note.title.trim().length > 0 && note.description.trim().length > 0) {
            onSave({...note, id: Date.now()})
        } else {
            if(note.title.trim().length === 0 && note.description.trim().length === 0) {
                alert("Please enter note title and description.")
            } else if(note.title.trim().length === 0) {
                alert("Please enter note title.")
            } else if(note.description.trim().length === 0) {
                alert("Please enter note description.")
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.screenTitle}>
                    Add New Note
                </Text>
                <TextInput 
                    style={styles.noteTitle} 
                    placeholder="Add note title" 
                    onChangeText={(val) => setNote({...note, title: val})}
                />
                <View style={styles.descriptionWrap}>
                    <TextInput 
                        style={styles.description} 
                        placeholder="Add note description" 
                        editable
                        multiline
                        onChangeText={(val) => setNote({...note, description: val})}
                    />
                </View>
                <Pressable style={styles.submit}  onPress={handleSubmit} >
                    <Text style={styles.submitText}> Add Note </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AddNote;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    formContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    screenTitle:{
        fontSize:24,
        color: '#FFF',
        textAlign: "center",
        width: "100%",
        padding: 10,
        backgroundColor: "#17487A"
    },
    noteTitle: {
        fontSize: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        color: "#666"
    },
    descriptionWrap:{
        flex: 1,
        marginVertical: 10
    },
    description: {
        fontSize: 16,
        color: "#666",
        width: "100%",
        padding: 10,
    },
    submit: {
        fontSize: 16,
        alignItems: 'center',
        padding: 12,
        backgroundColor: "#17487A",
    },
    submitText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    }
})
