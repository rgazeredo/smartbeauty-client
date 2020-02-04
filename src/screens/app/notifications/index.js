import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'; 
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get("window").width-30;

export default class Notifications extends Component {
    // static navigatorStyle = {};
    //     constructor(props) {
    //     super(props);
    //     this.props.navigator.setStyle({
    //         statusBarTextColorScheme: 'light',
    //         navBarBackgroundColor: '#000',
    //         navBarButtonColor: '#FFF',
    //     });
    //     this.props.navigator.setTitle({
    //         title: "NOTIFICAÇÕES" 
    //     });
    // }
    render() {
        return (   
            <ScrollView style={styles.container}>

                <TouchableOpacity style={styles.notification}>
                    <View style={styles.content}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                        <Text style={styles.timenew}>15min</Text>
                    </View>
                    <Text style={styles.titlenew}>AVALIE SEU ATENDIMENTO</Text>
                    <Text style={styles.namenew}>For Lady</Text>
                    <View style={styles.linenew}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.notification}>
                    <View style={styles.content}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#9B9B9B'}}
                            resizeMode="contain"
                        />
                        <Text style={styles.time}>3h</Text>
                    </View>
                    <Text style={styles.title}>LEMBRETE DE AGENDAMENTO</Text>
                    <Text style={styles.name}>For Lady</Text>
                    <View style={styles.line}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.notification}>
                    <View style={styles.content}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#9B9B9B'}}
                            resizeMode="contain"
                        />
                        <Text style={styles.time}>2d</Text>
                    </View>
                    <Text style={styles.title}>AGENDAMENTO CONFIRMADO</Text>
                    <Text style={styles.name}>For Lady</Text>
                    <View style={styles.line}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.notification}>
                    <View style={styles.content}>
                        <Image
                            source={require("../../../assets/images/logosmartbeaut.png")}
                            style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#9B9B9B'}}
                            resizeMode="contain"
                        />
                        <Text style={styles.time}>1mês</Text>
                    </View>
                    <Text style={styles.title}>SEJA BEM-VINDO</Text>
                    <Text style={styles.name}>Smartbeaut</Text>
                    <View style={styles.line}/>
                </TouchableOpacity>
            
            </ScrollView>
        )
    }
}
