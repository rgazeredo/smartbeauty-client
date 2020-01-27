import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Home extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarHideWithNavBar: true,
    };
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#000', padding:20, alignItems: 'center', justifyContent: 'center'}}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register') }>
                    <Image
                        source={require("../../../assets/images/logocolor.png")}
                        style={{ width: SCREEN_WIDTH * 0.5 }}
                        resizeMode="contain"
                    />                     
                </TouchableOpacity>
                
            </View>
        )
    }
}
