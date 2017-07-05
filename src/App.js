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
import GirlView from './screen/GirlView';

export default class App extends Component {
	render() {
		return (
			<GirlView />
		);
	}
}
