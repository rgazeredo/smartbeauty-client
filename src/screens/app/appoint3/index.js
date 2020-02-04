import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Container, Dimensions, TouchableOpacity } from 'react-native'; 
import { CheckBox, Button } from 'react-native-elements'; 

import styles from './styles';


export default class Appoint3 extends Component {
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
            <View style={styles.screen}>  
                <ScrollView style={styles.container}>
                    <Text style={styles.paragraph}>Escolha o(s) serviço(s) desejado(s)</Text>

                    <TouchableOpacity style={styles.service} onPress={() => this.props.navigator.push({ screen:'app.appoint4' })}>
                        <View style={styles.content}>
                            <CheckBox
                                    center
                                    size={44}
                                    iconType='material'
                                    textStyle={{ color: '#FFF' }} 
                                    containerStyle={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, margin: 0 }}
                                    checkedColor='rgba(28,187,156,1)'
                                    uncheckedColor='rgba(28,187,156,1)'
                                    checkedIcon='check-box'
                                    uncheckedIcon='check-box-outline-blank'
                            />
                            <Text style={styles.time}>45min</Text>
                        </View>
                        <Text style={styles.services}>CORTE DE CABELO</Text>
                        <Text style={styles.price}>A partir de R$30,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.service} onPress={() => this.props.navigator.push({ screen:'app.appoint4' })}>
                        <View style={styles.content}>
                            <CheckBox
                                    center
                                    size={44}
                                    iconType='material'
                                    textStyle={{ color: '#FFF' }} 
                                    containerStyle={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, margin: 0 }}
                                    checkedColor='rgba(28,187,156,1)'
                                    uncheckedColor='rgba(28,187,156,1)'
                                    checkedIcon='check-box'
                                    uncheckedIcon='check-box-outline-blank'
                            />
                            <Text style={styles.time}>30min</Text>
                        </View>
                        <Text style={styles.services}>ESCOVA</Text>
                        <Text style={styles.price}>R$20,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.service} onPress={() => this.props.navigator.push({ screen:'app.appoint4' })}>
                        <View style={styles.content}>
                            <CheckBox
                                    center
                                    size={44}
                                // checked
                                    iconType='material'
                                    textStyle={{ color: '#FFF' }} 
                                    containerStyle={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, margin: 0 }}
                                    checkedColor='rgba(28,187,156,1)'
                                    uncheckedColor='rgba(28,187,156,1)'
                                    checkedIcon='check-box'
                                    uncheckedIcon='check-box-outline-blank'
                            />
                            <Text style={styles.time}>4h</Text>
                        </View>
                        <Text style={styles.services}>ESCOVA PROGRESSIVA</Text>
                        <Text style={styles.price}>R$110,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.service} onPress={() => this.props.navigator.push({ screen:'app.appoint4' })}>
                        <View style={styles.content}>
                            <CheckBox
                                    center
                                    size={44}
                                    iconType='material'
                                    textStyle={{ color: '#FFF' }} 
                                    containerStyle={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, margin: 0 }}
                                    checkedColor='rgba(28,187,156,1)'
                                    uncheckedColor='rgba(28,187,156,1)'
                                    checkedIcon='check-box'
                                    uncheckedIcon='check-box-outline-blank'
                            />
                            <Text style={styles.time}>30min</Text>
                        </View>
                        <Text style={styles.services}>HIDRATAÇÃO</Text>
                        <Text style={styles.price}>A partir de R$25,00</Text>
                    
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.service} onPress={() => this.props.navigator.push({ screen:'app.appoint4' })}>
                        <View style={styles.content}>
                            <CheckBox
                                    center
                                    size={44}
                                    iconType='material'
                                    textStyle={{ color: '#FFF' }} 
                                    containerStyle={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, margin: 0 }}
                                    checkedColor='rgba(28,187,156,1)'
                                    uncheckedColor='rgba(28,187,156,1)'
                                    checkedIcon='check-box'
                                    uncheckedIcon='check-box-outline-blank'
                            />
                            <Text style={styles.time}>5h</Text>
                        </View>
                        <Text style={styles.services}>LUZES</Text>
                        <Text style={styles.price}>A partir de R$110,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.service} onPress={() => this.props.navigator.push({ screen:'app.appoint4' })}>
                        <View style={styles.content}>
                            <CheckBox
                                    center
                                    size={44}
                                    checked={true}
                                    iconType='material'
                                    textStyle={{ color: '#FFF' }} 
                                    containerStyle={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, margin: 0 }}
                                    checkedColor='rgba(28,187,156,1)'
                                    uncheckedColor='rgba(28,187,156,1)'
                                    checkedIcon='check-box'
                                    uncheckedIcon='check-box-outline-blank'
                                    
                            />
                            <Text style={styles.time}>4h</Text>
                        </View>
                        <Text style={styles.services}>MECHAS</Text>
                        <Text style={styles.price}>A partir de R$80,00</Text>
                    </TouchableOpacity>

                </ScrollView>
                <View style={styles.button}>
                    <Button
                        backgroundColor="#1CBB9C"
                        color="#FFF"
                        borderRadius={5}
                        title="AVANÇAR"
                        onPress={() =>
                            this.props.navigator.push({ screen: "app.appoint4" })
                        }
                    />
                </View>            
            </View>
        )
    }
}
