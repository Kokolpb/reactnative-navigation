import React, { Component } from 'react';
import { View, Animated,Text } from 'react-native';

//FadeView
export default class TransformBg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorAnim: new Animated.Value(0)
        }
    }
    componentDidMount() {
        // Animated.timing( this.state.colorAnim, { toValue:1, duration: 1000}).start();
        const anim1 = Animated.timing( this.state.colorAnim, { toValue:1, duration: 1000});
        const anim2 = Animated.timing( this.state.colorAnim, { toValue:0, duration: 1000});
        
        // Animated.sequence([anim1, anim2]).start();
        const finalAnim = Animated.sequence([anim1, anim2]);

        Animated.loop(finalAnim).start();
        

    }

    render() {
        const backgroundColor = this.state.colorAnim.interpolate({
            inputRange: [0,1],
            outputRange: ['green', 'yellow']
        });
        return (
            <View
                style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#ccc'}}
            >
                <Animated.View
                    style={{
                        width:300, height:200, backgroundColor
                    }}
                >
                    <Text>enqtran dot com</Text>
                </Animated.View>
            </View>
        );
    }
}