import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AsyncStorage from '@react-native-community/async-storage';

import HomeScreen from "./screens/app/home";
import SplashScreen from "./screens/app/splash";
import RegisterScreen from "./screens/app/register";
import ConfirmationScreen from "./screens/app/confirmation";

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);

        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userInfo = await AsyncStorage.getItem('@SmartBeauty:userInfo');
        this.props.navigation.navigate(userInfo ? 'App' : 'App');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AppStack = createDrawerNavigator(
    {
        AppRoot: createStackNavigator({
            Home: {
                screen: HomeScreen,
            },
            Confirmation: {
                screen: ConfirmationScreen,
            },
            Splash: {
                screen: SplashScreen,
            },
            Register: {
                screen: RegisterScreen,
            },
        })
    },
    // {
    //     contentComponent: props => <MenuLeft {...props} />
    // }
);

// const AuthStack = createStackNavigator(
//     {
//         Login: {
//             screen: LoginScreen,
//         },
//     }
// );

export default createAppContainer(createSwitchNavigator(
    {
        Loading: LoadingScreen,
        // Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Loading',
    }
));