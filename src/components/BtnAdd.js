import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';


const BtnAdd = (props)=>{
    return(
        <View style={ styles.container }>
            <TouchableOpacity activeOpacity={.7} onPress={()=>props.onPress()}>
                <Text style={ styles.text }>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BtnAdd;

const styles = StyleSheet.create({
    container : {
        height : 30,
        width : 60,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#00B4FF',
        borderRadius : 6,
        padding : 5
    },
    text : {
        color : '#fff',
        fontWeight : 'bold'
    }
})