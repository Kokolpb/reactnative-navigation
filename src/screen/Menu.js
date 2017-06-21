import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
            Menu
        </Text>

        <TouchableOpacity
                    style={{ marginTop: 20, justifyContent: 'center' }}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose')
                    }}
                >
                    <Text style={{color:'#fff', backgroundColor:'#333',padding:10,fontSize:18,borderRadius:5, alignItems:'center'}}>Close</Text>
                </TouchableOpacity>
      </View>
    );
  }
}
