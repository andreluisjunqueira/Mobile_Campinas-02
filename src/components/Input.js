import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Input extends Component{

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder = {this.props.placeholder}
                    onChangeText={(value)=>this.props.onChangeText(value)}
                    value={this.props.value}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        height : 30,
        width : 200,
        borderWidth : 1,
        borderColor : '#00B4FF',
        borderRadius : 6,
        padding : 5
    }
});