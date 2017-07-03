import React, { Component } from 'react';
import { View, Animated,Text, StyleSheet } from 'react-native';

//FadeView
export default class TransformRotate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform: new Animated.Value(0)
        }
    }
    componentDidMount() {
        // Animated.timing( this.state.colorAnim, { toValue:1, duration: 1000}).start();
        const anim1 = Animated.timing( this.state.transform, { toValue:1, duration: 1000});
        const anim2 = Animated.timing( this.state.transform, { toValue:0, duration: 1000});
        
        // Animated.sequence([anim1, anim2]).start();
        const finalAnim = Animated.sequence([anim1, anim2]);

        Animated.loop(finalAnim).start();
        

    }

    render() {
        const rotate = this.state.transform.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['15deg', '0deg', '-15deg']
        });
        return (
            <View
                style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#ccc'}}
            >
                <Animated.View
                    style={{
                        backgroundColor:'green',
                        width:300, 
                        height:200,
                        transform: [{ rotate }, {rotateY: rotate}],
                        ...this.props.style                        
                    }}
                >
                    {this.props.children}
                </Animated.View>
            </View>
        );
    }
}