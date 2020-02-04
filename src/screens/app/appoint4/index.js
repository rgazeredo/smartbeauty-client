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
                    <Text style={styles.paragraph}>Escolha o dia e o horário</Text>

                    <View style={styles.rowdays}>

                        <TouchableOpacity style={styles.columnday}>
                            <View style={styles.circleday}>
                                <Text style={styles.circletext1}>12</Text>
                                <Text style={styles.circletext2}>MAI</Text>
                                <Text style={styles.circletext3}>SEGUNDA</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnday}>
                            <View style={styles.circleday}>
                                <Text style={styles.circletext1}>13</Text>
                                <Text style={styles.circletext2}>MAI</Text>
                                <Text style={styles.circletext3}>TERCA</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnday}>
                            <View style={styles.circleday}>
                                <Text style={styles.circletext1}>14</Text>
                                <Text style={styles.circletext2}>MAI</Text>
                                <Text style={styles.circletext3}>QUARTA</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnday}>
                            <View style={styles.circleday}>
                                <Text style={styles.circletext1}>15</Text>
                                <Text style={styles.circletext2}>MAI</Text>
                                <Text style={styles.circletext3}>QUINTA</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnday}>
                            <View style={styles.circleday}>
                                <Text style={styles.circletext1}>16</Text>
                                <Text style={styles.circletext2}>MAI</Text>
                                <Text style={styles.circletext3}>SEXTA</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.rowhours}>

                        <TouchableOpacity style={styles.columnhour}>
                            <View style={styles.boxhour}>
                                <Text style={styles.text}>10:30</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnhour}>
                            <View style={styles.boxhour}>
                                <Text style={styles.text}>12:45</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnhour}>
                            <View style={styles.boxhour}>
                                <Text style={styles.text}>13:15</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnhour}>
                            <View style={styles.boxhour}>
                                <Text style={styles.text}>14:00</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnhour}>
                            <View style={styles.boxhour}>
                                <Text style={styles.text}>14:30</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.columnhour}>
                            <View style={styles.boxhour}>
                                <Text style={styles.text}>18:30</Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                </ScrollView>
                <View>
                    <Button
                        backgroundColor="#1CBB9C"
                        color="#FFF"
                        borderRadius={5}
                        title="AVANÇAR"
                        onPress={() =>
                            this.props.navigator.push({ screen: "app.appoint5" })
                        }
                    />
                </View>            
            </View>
        )
    }
}
