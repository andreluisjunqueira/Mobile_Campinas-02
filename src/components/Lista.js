import React, { Component } from 'react';
import { View, Text, TouchableOpacity,FlatList, StyleSheet } from 'react-native';
import Btn from './Btn';

export default class Lista extends Component {


    _renderItem({item}){
        const status = item.concluida;
        return(
            <View style={styles.item}>
                    <Text style={styles.textitem}>{item.titulo}</Text>
                    <Btn 
                        titulo={status?'Excluir':'Concluir'}
                        color={status?'#ff0000':'#00b300'}
                        onPress={()=>this.props.onPress(item)}/>
            </View>
        )
    }

  render() {
    return (
        <View style={ styles.container }>
            <FlatList 
                data={ this.props.data }
                keyExtractor={(item,index)=>index}
                renderItem={this._renderItem.bind(this)}
                ItemSeparatorComponent={()=><View style={styles.separador}/>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    item : {
        flexDirection : 'row',
        height : 60,
        marginBottom : 5,
        paddingHorizontal : 15,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    textitem : {
        fontSize : 20
    },
    separador : {
        height : 1,
        backgroundColor : '#000'
    }
})