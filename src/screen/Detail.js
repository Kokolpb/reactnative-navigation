/**
 * Author: enqtran
 * Uri: enqtran.com
 */ 
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Detail extends Component {
    render() {
        const { params } = this.props.navigation.state;
        const { wrapper, btn, btn_touch } = styles;
        return (
            <View style={wrapper}>
                <Text>
                    Detail
                </Text>

                <TouchableOpacity
                    style={btn_touch}
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                >
                    <Text style={btn}>Back</Text>
                </TouchableOpacity>

                <Text>{params.data}</Text>
                <Text>{params.description}</Text>
            </View>
        );
    }
}


const styles = {
    wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    btn_touch: { marginTop: 20, justifyContent: 'center' },
    btn: { color: '#fff', backgroundColor: '#333', padding: 10, fontSize: 18, borderRadius: 5, alignItems: 'center' }
}