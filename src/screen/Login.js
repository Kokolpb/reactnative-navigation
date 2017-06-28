/**
 * Author: enqtran
 * Uri: enqtran.com
 */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { wrapper } = styles;
        return (
            <View style={styles.wrapper} >
                <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false}
                    paginationStyle={{bottom:100}}
                    activeDotStyle={{backgroundColor:'#fff',width:10,height:10}}
                >
                    <View style={styles.slide1}>
                        <Image 
                            style={styles.slide1}
                            source={require('../images/1.png')}
                            resizeMode="stretch"
                        >
                        </Image>
                        <View style={{alignItems:'center', justifyContent:'center', position:'absolute', top: (width/100)*50}}>
                                <Text style={styles.text}>TIAMO</Text>
                                <Text style={{textAlign:'center', color:'#fff',fontSize:24, fontWeight:'bold', fontFamily:'Averta-Bold'}}>Gọi thoại và gọi video</Text>
                                <Text style={{textAlign:'center', color:'#fff',fontSize:18, fontWeight:'bold', fontFamily:'Averta-Bold'}}>Khi thân thiết hơn hay tiến gần nhau</Text>
                                <Text style={{textAlign:'center', color:'#fff',fontSize:18, fontWeight:'bold', fontFamily:'Averta-Bold'}}> hơn qua từng câu nói hình ảnh của nhau</Text>
                            </View>
                    </View>
                    
                    <View style={styles.slide1}>
                        <Image 
                            style={styles.slide1}
                            source={require('../images/2.png')}
                            resizeMode="stretch"
                        >
                        </Image>
                        <View style={{alignItems:'center', justifyContent:'center', position:'absolute', top: (width/100)*50}}>
                                <Text style={styles.text}>TIAMO</Text>
                                 <Text style={{textAlign:'center', color:'#fff',fontSize:24, fontWeight:'bold', fontFamily:'Averta-Bold'}}>Gọi thoại và gọi video</Text>
                                <Text style={{textAlign:'center', color:'#fff',fontSize:18, fontWeight:'bold', fontFamily:'Averta-Bold'}}>Khi thân thiết hơn hay tiến gần nhau</Text>
                                <Text style={{textAlign:'center', color:'#fff',fontSize:18, fontWeight:'bold', fontFamily:'Averta-Bold'}}> hơn qua từng câu nói hình ảnh của nhau</Text>
                            </View>
                    </View>

                    <View style={styles.slide1}>
                        <Image 
                            style={styles.slide1}
                            source={require('../images/3.png')}
                            resizeMode="stretch"
                        >
                        </Image>
                        <View style={{alignItems:'center', justifyContent:'center', position:'absolute', top: (width/100)*50}}>
                                <Text style={styles.text}>TIAMO</Text>
                                 <Text style={{textAlign:'center', color:'#fff',fontSize:24, fontWeight:'bold', fontFamily:'Averta-Bold'}}>Gọi thoại và gọi video</Text>
                                <Text style={{textAlign:'center', color:'#fff',fontSize:18, fontWeight:'bold', fontFamily:'Averta-Bold'}}>Khi thân thiết hơn hay tiến gần nhau</Text>
                                <Text style={{textAlign:'center', color:'#fff',fontSize:18, fontWeight:'bold', fontFamily:'Averta-Bold'}}> hơn qua từng câu nói hình ảnh của nhau</Text>
                            </View>
                    </View>
                   
                </Swiper>
                
                <View style={{position:'absolute', bottom:30, flex:1, flexDirection:'row', paddingLeft:20, paddingRight:20}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
                        <View>
                            <TouchableOpacity style={{backgroundColor:'#fff', borderRadius:50}}>
                                <Text style={{color:'#fff', textAlign:'center', padding:8, width:(width-60)/2, borderWidth:1, borderColor:'#ff6e00', backgroundColor:'#ff6e00', borderRadius:50, fontSize:22, fontFamily:'Averta-Bold'}}>Đăng ký</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Text style={{color:'#fff', textAlign:'center', padding:8, width:(width-60)/2, borderWidth:1, borderColor:'#ff6e00', backgroundColor:'#ff6e00', borderRadius:50, fontSize:22, fontFamily:'Averta-Bold'}}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    btn: {
        color: '#fff',
        backgroundColor: '#333',
        padding: 10,
        fontSize: 18,
        borderRadius: 5,
        alignItems: 'center'
    },
    slide1: {
        flex: 1,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily:'Averta-Bold'
    }
}
