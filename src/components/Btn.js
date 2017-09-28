import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';


const Btn = (props)=>{
    return(
        <View style={ [styles.container,{ backgroundColor : props.color}] }>
            <TouchableOpacity activeOpacity={.7} onPress={()=>props.onPress()}>
                <Text style={ styles.text }>{props.titulo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Btn;

const styles = StyleSheet.create({
    container : {
        height : 30,
        //width : 60,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 6,
        padding : 6
    },
    text : {
        color : '#fff',
        fontWeight : 'bold',
    }
})