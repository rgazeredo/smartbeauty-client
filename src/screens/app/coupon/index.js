import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get("window").width-30;

export default class Coupon extends Component {
    // static navigatorStyle = {};
    
    // constructor(props) {
    //     super(props);
    //     this.props.navigator.setStyle({
    //         statusBarTextColorScheme: 'light',
    //         navBarBackgroundColor: '#000',
    //         navBarButtonColor: '#FFF',
    //     });
    //     this.props.navigator.setTitle({
    //         title: "CUPONS"
    //     });
    // }

    render() {
        return (
            <ScrollView style={styles.container}>

                <TouchableOpacity style={styles.coupon} onPress={() => this.props.navigator.push({ screen:'app.appoint2' })}>
                    <View style={styles.image}>
                        <Image
                            style={{ width: SCREEN_WIDTH, height: 150,  borderRadius: 10}}
                            source={require("../../../assets/images/foto1.jpg")}
                            resizeMode="cover" >
                        </Image>
                    </View>
                    <View style={styles.layer}/>
                    <View style={styles.line}/>
                    <View style={styles.contentcoupon}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{marginLeft:10, marginTop:-22, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                        <View style={styles.circlediscount}>
                            <Text style={styles.circletext1}>30%</Text>
                            <Text style={styles.circletext2}>DESCONTO</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>For Lady</Text>
                    <Text style={styles.title}>Manicure/Pedicure</Text>
                    <Text style={styles.time}>Válido até 04/06</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.coupon} onPress={() => this.props.navigator.push({ screen:'app.appoint2' })}>
                    <View style={styles.image}>
                        <Image
                            style={{ width: SCREEN_WIDTH, height: 150, borderRadius: 10}}
                            source={require("../../../assets/images/foto1.jpg")}
                            resizeMode="cover">
                        </Image>
                    </View>
                    <View style={styles.layer}/>
                    <View style={styles.line}/>
                    <View style={styles.contentcoupon}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{marginLeft:10, marginTop:-20, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                        <View style={styles.circlediscount}>
                            <Text style={styles.circletext1}>R$80</Text>
                            <Text style={styles.circletext2}>VALE PRESENTE</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>For Lady</Text>
                    <Text style={styles.title}>Tratamento Estético</Text>
                    <Text style={styles.time}>Válido até 13/06</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.coupon} onPress={() => this.props.navigator.push({ screen:'app.appoint2' })}>
                    <View style={styles.image}>
                        <Image
                            style={{ width: SCREEN_WIDTH, height: 150, borderRadius: 10}}
                            source={require("../../../assets/images/foto1.jpg")}
                            resizeMode="cover" >
                        </Image>
                    </View>
                    <View style={styles.layer}/>
                    <View style={styles.line}/>
                    <View style={styles.contentcoupon}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{marginLeft:10, marginTop:-20, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                        <View style={styles.circlediscount}>
                            <Text style={styles.circletext1}>FREE</Text>
                            <Text style={styles.circletext2}>VALE PRESENTE</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>For Lady</Text>
                    <Text style={styles.title}>Massagem Relaxante</Text>
                    <Text style={styles.time}>Válido até 01/07</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
