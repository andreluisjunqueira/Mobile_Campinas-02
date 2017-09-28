import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Concluidas from '../screens/Concluidas';

const rootNavigator= StackNavigator({
    Home : {
        screen : Home,
        navigationOptions : ({navigation})=>{
            return{
                title : 'Nova tarefa',
                headerRight : (
                    <TouchableOpacity onPress={()=>navigation.navigate('Concluidas')} style={{paddingRight : 15}}>
                        <Text>Concluidas</Text>
                    </TouchableOpacity>)
            }
        }
    },
    Concluidas : {
        screen : Concluidas,
        navigationOptions : {
            title : 'Tarefas concluidas'
        }
    }
});

export default rootNavigator;