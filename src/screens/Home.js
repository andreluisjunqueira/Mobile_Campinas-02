import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { connect } from 'react-redux';
import * as actions from '../actions/todo-actions.js';

import Input from '../components/Input';
import BtnAdd from '../components/BtnAdd';
import Lista from '../components/Lista';

class Home extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            text : '',
            tarefas : [],
            selectedTab : 'pendentes'
        }
    }

    _onChangeText(text){
        this.setState({text});
    }

    _addTodo(){
        const { text } = this.state;
        const todo = {id:new Date().getTime(), titulo : text, concluida : false}
        text&&this.props.novo(todo);
        this.setState({text:''});
    }

    _concluir(id){
        this.props.concluir(id)
        //this.setState(state=>state.tarefas.map(t=>{if(t.id===id)return t['concluida']=true}))
    }

    _excluir(id){
        this.setState(state=>state.tarefas.filter(t=>t.id!=id))
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={ styles.inputView }>
                    <Input 
                        placeholder='Nova tarefa'
                        onChangeText={(text)=>this._onChangeText(text)}
                        value={this.state.text}
                    />
                    <BtnAdd 
                        onPress={()=>this._addTodo()}
                    />
                </View>
                    <Lista 
                        data={this.props.todos.filter(tarefa=>!tarefa.concluida)}
                        onPress={(tarefa)=>this._concluir(tarefa.id)}
                    />
            </View>
        )
    }
}

const mapStateToProps = ({todos})=>{
    console.log('Todos', todos)
    return{
        todos
    }
}
export default connect(mapStateToProps, actions)(Home)

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