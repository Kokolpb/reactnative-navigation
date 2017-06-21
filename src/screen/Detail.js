import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Detail extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Detail
                </Text>

                <TouchableOpacity
                    style={{ marginTop: 20, justifyContent: 'center' }}
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                >
                    <Text style={{color:'#fff', backgroundColor:'#333',padding:10,fontSize:18,borderRadius:5, alignItems:'center'}}>Back</Text>
                </TouchableOpacity>

                <Text>{this.props.navigation.state.params.data}</Text>
                <Text>{this.props.navigation.state.params.description}</Text>
            </View>
        );
    }
}
