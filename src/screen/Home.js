/**
 * Author: enqtran
 * Uri: enqtran.com
 */ 
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    // static navigationOptions = {
    //     title: 'Trang chủ'
    // }
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { wrapper, btn, btn_touch } = styles;
        return (
            <View style={wrapper}>
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
                        this.props.navigation.navigate('MainGifScreen', { data: 'Image', description: 'image' })
                    }}
                >
                    <Text style={btn}>Goto Image</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={btn_touch}
                    onPress={() => {
                        this.props.navigation.navigate('ColorPicker', { data: 'ColorPicker', description: 'ColorPicker' })
                    }}
                >
                    <Text style={btn}>Color Picker</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={btn_touch}
                    onPress={() => {
                        this.props.navigation.navigate('NextMonth', { data: 'NextMonth', description: 'NextMonth' })
                    }}
                >
                    <Text style={btn}>Next Mo Month</Text>
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
