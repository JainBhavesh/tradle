import { Images } from '@src/assets';
import { color, moderateScale, scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import React from 'react';
import { View, TextInput, Text, StyleSheet, Image } from 'react-native';

const Searchbar = ({ placeholder, searchText, onChangeText }: any) => {
    return (
        <View style={[style.container]}>
            <View style={style.searchIcon}>
             <Image source={Images.SEARCH} tintColor={color.theme5.primaryColor} resizeMode='contain' style={{height:scaleHeight(30),width:scaleWidth(30)}} />
            </View>
            <TextInput
                style={[style.textInput]}
                value={searchText}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={color.theme5.primaryColor}
            />
        </View>
    );


}
const style = StyleSheet.create({
    container: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scaledSize(10),
        borderWidth:1,
        marginHorizontal:scaledSize(10),
        borderRadius:moderateScale(10),
        borderColor:color.theme5.primaryColor,
        marginBottom:scaleHeight(10)
    },
    textInput: {
        width: "90%",
        height:scaleHeight(45)
    },
    searchIcon: { marginRight:scaledSize(1) }
})
export default Searchbar;

