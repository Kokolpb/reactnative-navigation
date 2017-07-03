import React, { Component } from 'react';
import { View, Animated,Text, Easing } from 'react-native';

//side View
export default class Animated2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideAnim1: new Animated.Value(-700),
            sideAnim2: new Animated.Value(-700)
        }
    }

    componentDidMount() {
        // Animated.timing( this.state.sideAnim, { toValue:0, duration: 3000}).start();
        // Animated.spring( this.state.sideAnim, { toValue:0, duration: 3000}).start();
        // Animated.decay( this.state.sideAnim, { toValue:0, duration: 3000}).start();
        const anim1 = Animated.timing( 
            this.state.sideAnim1, 
            { 
                toValue:0, 
                duration: 1000,
                // easing: Easing.back
                easing: Easing.bounce
                // easing: Easing.ease
                // easing: Easing.elastic
            }
        );
        const anim2 = Animated.timing( 
            this.state.sideAnim2, 
            { 
                toValue:0, 
                duration: 1000,
                // easing: Easing.back
                easing: Easing.bounce
                // easing: Easing.ease
                // easing: Easing.elastic
            }
        );

        // Animated.sequence([anim1, anim2]).start();
        // Animated.parallel([anim1, anim2]).start();
        Animated.stagger( 200, [anim1, anim2]).start();

    }

    render() {
        const marginLeft1 = this.state.sideAnim1;
        const marginLeft2 = this.state.sideAnim2;
        return (
            <View
                style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#ccc'}}
            >
                <Animated.View
                    style={{width:300, height:100, backgroundColor:'green', marginLeft: marginLeft1, marginBottom: 30}}
                >
                    <Text>enqtran dot com</Text>
                </Animated.View>

                <Animated.View
                    style={{width:300, height:100, backgroundColor:'green', marginLeft: marginLeft2}}
                >
                    <Text>enqtran dot com</Text>
                </Animated.View>
            </View>
        );
    }
}