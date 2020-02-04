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

export default class Profile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.props.navigator.setStyle({
    //         statusBarTextColorScheme: "light",
    //         navBarBackgroundColor: "#000",
    //         navBarButtonColor: "#FFF",
    //     });
    //     this.props.navigator.setTitle({
    //         title: "MEU PERFIL"
    //     });
    // }

    render() {
        return (
            <ScrollView style={styles.container}>
                
                <View style={styles.whitetab}>
                    <TouchableOpacity style={styles.photo}>
                        <View>
                            <Image
                                source={require("../../../assets/images/foto17.png")}
                                style={{
                                    width: 140,
                                    height: 140,
                                    borderRadius: 70,
                                    borderWidth: 2,
                                    borderColor: "rgba(28,187,156,1)"
                                }}
                                resizeMode="cover"
                            /> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.title}>
                        <Text style={styles.name}>Joana Goes</Text>
                        <Progress.Bar progress={0.8} width={200}  animationConfig={{  bounciness: 2 }} color= 'rgba(28,187,156,1)'/>
                        <Text style={styles.level}>NÍVEL 3</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.greentab}>
                
                    <View style={styles.rowbadges}>
                        <TouchableOpacity style={styles.badge}>    
                            <Image
                                source={require("../../../assets/images/foto20.png")}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                    borderWidth: 2,
                                    borderColor: '#FFF',
                                }}
                                resizeMode="cover"
                            />
                            <View style={styles.leveltab}>
                                <Text style={styles.level}>33</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.badge}>
                            <Image
                                source={require("../../../assets/images/foto22.png")}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                    borderWidth: 2,
                                    borderColor: '#FFF',
                                }}
                                resizeMode="cover"
                            />
                            <View style={styles.leveltab}>
                                <Text style={styles.level}>24</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.badge} onPress={() =>
                        this.props.navigator.push({ screen: "app.badge" })
                    }>
                            <Image
                                source={require("../../../assets/images/foto21.png")}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                    borderWidth: 2,
                                    borderColor: '#FFF',
                                }}
                                resizeMode="cover"
                            />
                            <View style={styles.leveltab}>
                                <Text style={styles.level}>12</Text>
                            </View>
                            
                        </TouchableOpacity>    
                    </View>

                    <View style={styles.rowbadges}>
                        <TouchableOpacity style={styles.badge}>    
                            <Image
                                source={require("../../../assets/images/foto23.png")}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                    borderWidth: 2,
                                    borderColor: '#FFF',
                                }}
                                resizeMode="cover"
                            />
                            <View style={styles.leveltab}>
                                <Text style={styles.level}>4</Text>
                            </View>
                        </TouchableOpacity>
                          
                    </View>

                </View>

            </ScrollView>
        );
    }
}
