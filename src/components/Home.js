import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Input from './Input';
import BtnAdd from './BtnAdd';
import Lista from './Lista';

export default class Home extends Component{
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
        const { tarefas, text } = this.state;
        console.log('Aquiii', text)
        text&&tarefas.push({id:new Date().getTime(), titulo : text, concluida : false});
        this.setState({tarefas, text:''});
    }

    _concluir(id){
        this.setState(state=>state.tarefas.map(t=>{if(t.id===id)return t['concluida']=true}))
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
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'pendentes'}
                        title="Pendentes"
                        onPress={() => this.setState({ selectedTab: 'pendentes' })}>
                            <Lista 
                                data={this.state.tarefas.filter(tarefa=>!tarefa.concluida)}
                                onPress={(tarefa)=>this._concluir(tarefa.id)}
                            />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'concluidas'}
                        title="Concluidas"
                        onPress={() => this.setState({ selectedTab: 'concluidas' })}>
                            <Lista 
                                data={this.state.tarefas.filter(tarefa=>tarefa.concluida)}
                                onPress={(tarefa)=>this._excluir(tarefa.id)}
                            />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}

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