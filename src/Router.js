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
import NextMonth from './screen/NextMonth';

import Animated1 from './screen/Animated1';
import Animated2 from './screen/Animated2';
import TransformBg from './screen/TransformBg';
import TransformRotate from './screen/TransformRotate';
import ResponseView from './screen/ResponseView';
import GirlView from './screen/GirlView';

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
    },
    NextMonth: {
        screen: NextMonth,
        navigationOptions: {
            title: 'NextMonth',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    FadeIn: {
        screen: Animated1,
        navigationOptions: {
            title: 'FadeIn',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    Animated2: {
        screen: Animated2,
        navigationOptions: {
            title: 'Animated2',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    TransformBg: {
        screen: TransformBg,
        navigationOptions: {
            title: 'TransformBg',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    TransformRotate: {
        screen: TransformRotate,
        navigationOptions: {
            title: 'TransformRotate',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    ResponseView: {
        screen: ResponseView,
        navigationOptions: {
            title: 'ResponseView',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },
    GirlView: {
        screen: GirlView,
        navigationOptions: {
            title: 'GirlView',
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            },
            headerRight: <View />
        }
    },

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