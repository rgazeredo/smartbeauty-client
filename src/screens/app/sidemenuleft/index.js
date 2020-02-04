import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    StyleSheet,
    ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import ProgressBar from "react-native-progress/Bar";
import * as Progress from "react-native-progress";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class SideMenuLeft extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarTextColorScheme: "dark"
    };


    _goToScreen(link) {
        this._toggleDrawer();
        this.props.navigator.handleDeepLink({ link });
    }

  _toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}//end _toggleDrawer

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#000",
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}
            >
                <View
                    onPress={() =>
                        this.props.navigator.push({ screen: "app.register" })
                    }
                >
                    <Image
                        source={require("../../../assets/images/logocolor.png")}
                        style={{ width: SCREEN_WIDTH * 0.4 }}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.gallery}>
                    <ImageBackground
                        style={{ width: SCREEN_WIDTH, height: 220 }}
                        source={require("../../../assets/images/foto19.jpg")}
                        resizeMode="cover"
                    >
                        <LinearGradient
                            colors={["#000", "transparent"]}
                            style={styles.linearGradient}
                        />
                    </ImageBackground>
                </View>

                <TouchableOpacity onPress={() => this._goToScreen('app.profile')}>
                    <View style={styles.photo}>
                        <View>
                            <Image
                                source={require("../../../assets/images/foto17.png")}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                    borderWidth: 2,
                                    borderColor: "rgba(28,187,156,1)"
                                }}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.name}>Joana Goes</Text>
                        <Progress.Bar progress={0.8} width={200}  animationConfig={{  bounciness: 2 }} color= 'rgba(28,187,156,1)'/>
                    </View>
                </TouchableOpacity>

                <View style={styles.list}>

                    <TouchableOpacity style={styles.line} onPress={() => this._goToScreen('app.coupon')}>
                        <Icon type='font-awesome' name="tags" size={22} color='#FFF' iconStyle={styles.iconsleft} />
                        <Text style={styles.columntextscreens}>Cupons</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.line} onPress={() => this._goToScreen('app.appointments')}>
                        <Icon type='font-awesome' name="calendar" size={22} color='#FFF' iconStyle={styles.iconsleft} />
                        <Text style={styles.columntextscreens}>Agendamentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.line}
                        onPress={() =>
                            this._goToScreen('app.favorites')}
                        >
                        <Icon
                            type="font-awesome"
                            name="star"
                            size={22}
                            color="#FFF"
                            iconStyle={styles.iconsleft}
                        />
                        <Text style={styles.columntextscreens}>Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.line}
                        onPress={() =>
                            this._goToScreen('app.search')}
                    >
                        <Icon
                            type="font-awesome"
                            name="search"
                            size={22}
                            color="#FFF"
                            iconStyle={styles.iconsleft}
                        />
                        <Text style={styles.columntextscreens}>
                            Locais Próximos
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.line}
                        onPress={() =>
                            this._goToScreen('app.notifications')}
                        >
                        <Icon
                            type="font-awesome"
                            name="bell"
                            size={22}
                            color="#FFF"
                            iconStyle={styles.iconsleft}
                        />
                        <Text style={styles.columntextscreens}>
                            Notificações
                        </Text>
                        <Icon
                            type="font-awesome"
                            name="exclamation-circle"
                            size={22}
                            color="rgba(28,187,156,1)"
                            iconStyle={styles.iconsright}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.line}>
                    
                        <Icon
                            type="font-awesome"
                            name="cog"
                            size={22}
                            color="#FFF"
                            iconStyle={styles.iconsleft}
                        />
                        <Text style={styles.columntextscreens}>
                            Configurações
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gallery: {
        borderBottomWidth: 2,
        borderColor: "rgba(28,187,156,1)",
        marginTop: -30
    },
    linearGradient: {
        flex: 1
    },
    photo: {
        marginTop: -42,
        alignItems: "center"
    },
    title: {
        alignItems: "center"
    },
    name: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5
    },
    list: {
        flex: 1,
        marginTop: 27,
        flexDirection: "column",
        alignSelf: "flex-start"
    },
    line: {
        flexDirection: "row",
        marginRight: 10,
        justifyContent: "flex-start",
        marginBottom: 20
    },
    iconsleft: {},
    columntextscreens: {
        color: "#FFF",
        fontSize: 17,
        marginLeft: 12
    },
    iconsright: {
        marginLeft: 90
    }
});
