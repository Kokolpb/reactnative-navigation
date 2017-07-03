import React, { Component } from 'react';
import { View, Animated,Text, StyleSheet } from 'react-native';

//FadeView
export default class ResponseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
       
        return (
            <View
                style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#ccc'}}
            >
                <Animated.View
                    style={{
                        backgroundColor:'green',
                        width:300, 
                        height:200,
                        ...this.props.style                        
                    }}
                >
                    {this.props.children}
                </Animated.View>
            </View>
        );
    }
}