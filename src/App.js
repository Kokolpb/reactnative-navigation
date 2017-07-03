/**
 * Author: enqtran
 * Uri: enqtran.com
 */ 
import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { SideMenu } from './Router';
import Animated1 from './screen/Animated1';
import Animated2 from './screen/Animated2';
import TransformBg from './screen/TransformBg';
import TransformRotate from './screen/TransformRotate';
import ResponseView from './screen/ResponseView';

export default class App extends Component {
	render() {
		return (
			<View style={{flex:1, justifyContent:'center'}}>
				<ResponseView style={{backgroundColor:'yellow'}}>
					<Text style={{fontSize:30}}>enqtran</Text>
				</ResponseView>
			</View>
		);
	}
}
