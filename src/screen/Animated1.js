import React, { Component } from 'react';
import { View, Animated,Text } from 'react-native';

//FadeView
export default class Animated1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.timing( this.state.fadeAnim, { toValue:1, duration: 3000}).start();
    }

    render() {
        const opacity = this.state.fadeAnim;
        return (
            <View
                style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#ccc'}}
            >
                <Animated.View
                    style={{width:300, height:200, backgroundColor:'green', opacity}}
                >
                    <Text>enqtran dot com</Text>
                </Animated.View>
            </View>
        );
    }
}