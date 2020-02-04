import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'; 
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get("window").width-30;

export default class Appoint2 extends Component {
    static navigatorStyle = {};

    constructor(props) {
        super(props);
        // this.props.navigator.setStyle({
        //     statusBarTextColorScheme: 'light',
        //     navBarBackgroundColor: '#000',
        //     navBarButtonColor: '#FFF',
        //     disabledBackGesture: true
        // });
        // this.props.navigator.setTitle({
        //     title: "AGENDAMENTO" 
        // });
    }
    
    render() {
        return (   
            <ScrollView style={styles.container}>
                <Text style={styles.paragraph}>Escolha um(a) profissional</Text>

                <TouchableOpacity style={styles.contentpro} onPress={() => this.props.navigator.push({ screen:'app.appoint3' })}>
                    <View style={styles.content}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.professional}>CARLA MELO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contentpro} onPress={() => this.props.navigator.push({ screen:'app.appoint3' })}>
                    <View style={styles.content}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.professional}>LUANA ADHEMAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contentpro} onPress={() => this.props.navigator.push({ screen:'app.appoint3' })}>
                    <View style={styles.content}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.professional}>MARCOS FERNANDES</Text>
                </TouchableOpacity>

                
                
            </ScrollView>
        )
    }
}
