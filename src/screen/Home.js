import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    // static navigationOptions = {
    //     title: 'Trang chủ'
    // }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Home
                </Text>
                <TouchableOpacity 

                    style={{marginTop:20, justifyContent:'center'}}
                    onPress={() => {
                        this.props.navigation.navigate('DetailScreen', {data:'Hello world', description:'hahaha'})
                    }}
                >
                    <Text style={{color:'#fff', backgroundColor:'#333',padding:10,fontSize:18,borderRadius:5, alignItems:'center'}}>Goto Detail</Text>
                </TouchableOpacity>

                <TouchableOpacity 

                    style={{marginTop:20, justifyContent:'center'}}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerOpen')
                    }}
                >
                    <Text style={{color:'#fff', backgroundColor:'#333',padding:10,fontSize:18,borderRadius:5, alignItems:'center' }}>Open Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
