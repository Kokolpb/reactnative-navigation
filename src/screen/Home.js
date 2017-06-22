import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    // static navigationOptions = {
    //     title: 'Trang chủ'
    // }

    render() {
        const { wrapper, btn, btn_touch } = styles;
        return (
            <View style={wrapper}>
                <Text>
                    Home
                </Text>
                <TouchableOpacity
                    style={btn_touch}
                    onPress={() => {
                        this.props.navigation.navigate('DetailScreen', { data: 'Hello world', description: 'hahaha' })
                    }}
                >
                    <Text style={btn}>Goto Detail</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={btn_touch}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerOpen')
                    }}
                >
                    <Text style={btn}>Open Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    btn: { color: '#fff', backgroundColor: '#333', padding: 10, fontSize: 18, borderRadius: 5, alignItems: 'center' },
    btn_touch: { marginTop: 20, justifyContent: 'center' }

}
