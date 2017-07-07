/**
 * Author: enqtran
 * Uri: enqtran.com
 */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

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
            <ScrollView>
                <View style={wrapper}>
                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('DetailScreen', { data: 'Hello world', description: 'hahaha' })
                        }}
                    >
                        <Text style={btn}>Detail</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('MainGifScreen', { data: 'Image', description: 'image' })
                        }}
                    >
                        <Text style={btn}>FlatList with API</Text>
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
                        <Text style={btn}>First Mon - Next Month</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('DrawerOpen')
                        }}
                    >
                        <Text style={btn}>Drawer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('FadeIn')
                        }}
                    >
                        <Text style={btn}>FadeIn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('Animated2')
                        }}
                    >
                        <Text style={btn}>Animated2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('TransformBg')
                        }}
                    >
                        <Text style={btn}>TransformBg</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('TransformRotate')
                        }}
                    >
                        <Text style={btn}>TransformRotate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('ResponseView')
                        }}
                    >
                        <Text style={btn}>ResponseView</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btn_touch}
                        onPress={() => {
                            this.props.navigation.navigate('GirlView')
                        }}
                    >
                        <Text style={btn}>GirlView</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }
}

const styles = {
    wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom:15 },
    btn: { color: '#fff', backgroundColor: '#333', padding: 10, fontSize: 18, borderRadius: 5, alignItems: 'center' },
    btn_touch: { marginTop: 15, justifyContent: 'center' }

}
