import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { connect } from 'react-redux';
import * as actions from '../actions/todo-actions';
import Input from '../components/Input';
import BtnAdd from '../components/BtnAdd';
import Lista from '../components/Lista';

class Concluidas extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            text : '',
            tarefas : [],
            selectedTab : 'pendentes'
        }
    }
    _excluir(id){
        id&&this.props.excluir(id);
    }

    render(){
        return(
            <View style={styles.container}>
                <Lista 
                    data={ this.props.todos }
                    onPress={(tarefa)=>this._excluir(tarefa.id)}
                />
            </View>
        )
    }
}
const mapStateToProps = ({todos})=>{
    return{
        todos : todos.filter(t=>t.concluida)
    }
}
export default connect(mapStateToProps, actions)(Concluidas)
const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 50,
    },
    inputView : {
       flexDirection : 'row',
       justifyContent : 'space-around' ,
       marginBottom : 50
    }
});