import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { ScreenTypes } from '../constants/constants';

const HomeScreen = ({onExit}) => {
    const {ADD_NOTE, ALL_NOTES} = ScreenTypes;
    return (
        <View style={styles.container}>
            <Pressable onPress={() => onExit(ADD_NOTE)}>
                <View style={styles.itemBtn}>
                    <Text style={styles.itemBtnText}>
                        ADD NEW NOTE
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => onExit(ALL_NOTES)}>
                <View style={styles.itemBtn}>
                    <Text style={styles.itemBtnText}>
                        VIEW ALL NOTES
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
