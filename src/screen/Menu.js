/**
 * Author: enqtran
 * Uri: enqtran.com
 */ 
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
	render() {
		const { wrapper, btn, btn_touch } = styles;
		return (
			<View style={wrapper}>
				<Text>
					Menu
          		</Text>

				<TouchableOpacity
					style={btn_touch}
					onPress={() => {
						this.props.navigation.navigate('DrawerClose')
					}}
				>
					<Text style={btn}>Close</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = {
	wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	btn_touch: { marginTop: 20, justifyContent: 'center' },
	btn: { color: '#fff', backgroundColor: '#333', padding: 10, fontSize: 18, borderRadius: 5, alignItems: 'center' }
}