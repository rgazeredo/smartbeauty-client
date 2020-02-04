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
import ProfessionalScreen from "./screens/app/professional";
import Appoint1Screen from "./screens/app/appoint1";
import Appoint2Screen from "./screens/app/appoint2";
import Appoint3Screen from "./screens/app/appoint3";
import Appoint4Screen from "./screens/app/appoint4";
import BadgeScreen from "./screens/app/badge";
import BusinessScreen from "./screens/app/business";
import CouponScreen from "./screens/app/coupon";
import FavoritesScreen from "./screens/app/favorites";
import FiltersScreen from "./screens/app/filters";
import NotificationsScreen from "./screens/app/notifications";
import ProfileScreen from "./screens/app/profile";
import RatingScreen from "./screens/app/rating";
import SearchScreen from "./screens/app/search";
import SidemenuleftScreen from "./screens/app/sidemenuleft";


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
            Register: {
                screen: RegisterScreen,
            },
            Splash: {
                screen: SplashScreen,
            },
            Confirmation: {
                screen: ConfirmationScreen,
            },
            Professional: {
                screen: ProfessionalScreen,
            },
            Appoint1: {
                screen: Appoint1Screen,
            },
            Appoint2: {
                screen: Appoint2Screen,
            },
            Appoint3: {
                screen: Appoint3Screen,
            },
            Appoint4: {
                screen: Appoint4Screen,
            },
            Home: {
                screen: HomeScreen,
            },
            Badge: {
                screen: BadgeScreen,
            },
            Business: {
                screen: BusinessScreen,
            },
            Coupon: {
                screen: CouponScreen,
            },
            Favorites: {
                screen: FavoritesScreen,
            },
            Filters: {
                screen: FiltersScreen,
            },
            Notifications: {
                screen: NotificationsScreen,
            },
            Profile: {
                screen: ProfileScreen,
            },
            Rating: {
                screen: RatingScreen,
            },
            Search: {
                screen: SearchScreen,
            },
            Sidemenuleft: {
                screen: SidemenuleftScreen,
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