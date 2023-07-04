import React from 'react'
import {Dimensions,  FlatList, SafeAreaView, Pressable, StyleSheet, Text, View } from 'react-native'

import Note from '../components/Note';

import { ScreenTypes } from '../constants/constants';

const AllNotesScreen = ({notes, onExit}) => {
    return (
        <SafeAreaView style={styles.container}>
            {
                notes.length > 0 ? (
                    <FlatList 
                        data={notes}
                        renderItem={({item}) => <Note note={item} />}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    <View style={styles.emptyNotesWrap}>
                        <Text style={styles.emptyNotes}>
                            0 notes found, Add new note from the home screen.
                        </Text>
                        <Pressable onPress={() => onExit(ScreenTypes.ADD_NOTE)}>
                            <View style={styles.itemBtn}>
                                <Text style={styles.itemBtnText}>
                                    ADD NEW NOTE
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default AllNotesScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        overflow: "scroll"
    },
    emptyNotesWrap: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyNotes: {
        margin: 10,
        padding: 10,
        fontSize: 18,
        color: "#17487A",
        fontWeight: 'bold'
    },
    itemBtn:{
        width: Dimensions.get("window").width - 100,
        height: 60,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#17487A",
        elevation: 10,  
    },
    itemBtnText : {
        color: "#FFF",
        fontSize: 16,
        fontWeight: 'bold'
    }
})
