import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import { ScreenTypes } from '../constants/constants';

const CustomButton = ({onButtonClick, color, text}) => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button 
                    title={text} 
                    onPress={() => onButtonClick(ScreenTypes.HOME)}
                    color={color}
                />
            </View>
        </View>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 20,
        backgroundColor: "#4889D4",
    }
})
