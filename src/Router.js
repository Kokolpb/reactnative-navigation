/**
 * Author: enqtran
 * Uri: enqtran.com
 */ 
import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './screen/Home';
import User from './screen/User';
import Detail from './screen/Detail';
import Menu from './screen/Menu';
import MainGif from './screen/MainGif';
import ColorPicker from './screen/ColorPicker';

export const HomeStack = StackNavigator({
    HomeScreen: {
        //name class screen 
        screen: Home,

        //Option
        navigationOptions: {
            title: 'Trang chủ',
            headerTintColor: 'blue',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
        }
    },
    DetailScreen: {
        screen: Detail,
        navigationOptions: {
            title: 'Detail',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    MainGifScreen: {
        screen: MainGif,
        navigationOptions: {
            title: 'MainGif',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    ColorPicker: {
        screen: ColorPicker,
        navigationOptions: {
            title: 'ColorPicker',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    }
});


export const UserStack = StackNavigator({
    UserScreen: {
        screen: User,
        navigationOptions: {
            title: 'Tài khoản',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
        }
    }
});


export const Tabbar = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'HOME'
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            tabBarLabel: 'USER'
        }
    }
},
    {
        tabBarPosition: 'bottom',
        swipeEnable: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#ccc',
            },
            activeTintColor: 'green',
            inactiveTintColor: 'blue'
        }
    });


export const SideMenu = DrawerNavigator({
    MenuDrawer: {
        screen: Tabbar,
    }
},
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);