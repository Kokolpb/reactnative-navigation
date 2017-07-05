import React, { Component } from 'react';
import { Animated, View, Image, Text, StyleSheet, Easing } from 'react-native';
import icon from '../media/logo.png';

//GirlView
export default class GirlView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null
        }
    }

    onPress(evt) {
        const { locationX, locationY } = evt.nativeEvent;        
        this.setState({ x: locationX, y: locationY });
        console.log(locationX, locationY);
    }

    onMove(evt) {
        const { pageX, pageY } = evt.nativeEvent;
        const { x, y } = this.state;
        console.log(pageX, pageY);
    }

    onRelease(evt) {
        
    }

    render() {
        return (
            <View
                onStartShouldSetResponder={ ()=> true }
                onMoveShouldSetResponder={ () => true }

                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}

                onResponderGrant={this.onPress.bind(this)}
                style={{
                    flex:1,
                    backgroundColor: 'green',
                }}
            >
                <Animated.Image 
                    source={icon}
                    style={{ 
                        height: 100, 
                        width: 100
                    }}
                />
            </View>
        );
    }
}