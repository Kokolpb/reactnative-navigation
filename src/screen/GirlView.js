import React, { Component } from 'react';
import { Animated, View, Image, Text, StyleSheet, Easing, Dimensions } from 'react-native';
import h1 from '../media/h1.png';
import h2 from '../media/h2.png';
import h3 from '../media/h3.png';
import h4 from '../media/h4.png';
import h5 from '../media/h5.png';
import h6 from '../media/h6.png';
import h7 from '../media/h7.png';

const { width } = Dimensions.get('window');
const arrImage = [h1,h2,h3,h4,h5,h6,h7];

//GirlView
export default class GirlView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            rotate: new Animated.Value(0),
            index: 0
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
        const w = 1.5 * (pageX - x) / width;
        const tyLe = new Animated.Value(w);

        const countImage = arrImage.length;
        if(w > 1) {
            this.setState({ 
                index: (this.state.index + 1) % countImage,
                x: pageX,
                y: pageY
            });
        } else if(w < -1) {
            this.setState({ 
                index: (this.state.index - 1 +countImage) % countImage,
                x: pageX,
                y: pageY
            });
        }

        
        this.setState({ rotate : tyLe });

    }

    onRelease(evt) {
        Animated.timing(
            this.state.rotate,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        ).start();
    }

    render() {
        const rotate = this.state.rotate.interpolate({
            inputRange: [-1,1],
            outputRange: ['-20deg', '20deg']
        });
        const opacity = this.state.rotate.interpolate({
            inputRange: [-1,0,1],
            outputRange: [0,1,0]
        });

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
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text style={{color:'#fff', marginBottom:20, fontSize:20}}>Chuyển Ảnh</Text>
                <Animated.Image 
                    source={arrImage[this.state.index]}
                    style={{ 
                        height: 200, 
                        width: 150,
                        opacity,
                        transform: [{ rotate }]
                    }}
                />
            </View>
        );
    }
}