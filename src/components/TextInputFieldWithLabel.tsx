import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { scaleHeight, scaleWidth, scaledSize } from '@src/utils'


const TextInputFieldWithLabel = ({ onTextChange, placeholder, style, label, multiline, maxLength, textInputStyle, keyboardType, value }: any) => {

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.textInputContainer, textInputStyle]}
                placeholder={placeholder}
                onChangeText={(value) => {
                    onTextChange(value)
                }}
                multiline={multiline}
                maxLength={maxLength}
                keyboardType={keyboardType}
                value={value}
            />
        </View>
    )
}

export default TextInputFieldWithLabel;

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    textInputContainer: {
        backgroundColor: "white",
        height: scaleHeight(50),
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: scaledSize(10),
        borderWidth: 1,
        borderColor: "#EAEAEB",
        paddingHorizontal: scaleWidth(15),
    },
    label: {
        color: "black",
        paddingVertical: scaleHeight(0.8),
        marginLeft: scaleWidth(2),
        paddingBottom:scaleHeight(5)
    }
})