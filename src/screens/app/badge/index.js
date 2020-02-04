import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    ART,
    TouchableOpacity
} from "react-native";
import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';

import styles from "./styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Badge extends Component {
    constructor(props) {
        super(props);
        // this.props.navigator.setStyle({
        //     statusBarTextColorScheme: "light",
        //     navBarBackgroundColor: "#000",
        //     navBarButtonColor: "#FFF",
        //     disabledBackGesture: true
        // });
        // this.props.navigator.setTitle({
        //     title: "CONQUISTA"
        // });
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.tab}>
                
                        <View style={styles.badge}>    
                            <Image
                                source={require("../../../assets/images/foto21.png")}
                                style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: 100,
                                    borderWidth: 2,
                                    borderColor: 'rgba(28,187,156,1)',
                                    backgroundColor: 'rgba(28,187,156,1)',
                                }}
                                resizeMode="cover"
                            />
                            <View style={styles.leveltab}>
                                <Text style={styles.level}>12</Text>
                            </View>
                            <View style={styles.title}>
                                <Text style={styles.name}>Massagem</Text>
                            </View>
                            <View style={styles.descriptiontab}>
                                <Text style={styles.descriptiontext}>A massagem atua fisicamente e energeticamente, estimulando o sistema imunológico e atuando diretamente contra as dores.</Text> 
                            </View>
                        </View>

                </View>

            </ScrollView>
        );
    }
}
