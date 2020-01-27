import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { 
    Button 
} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Confirmation extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarTextColorScheme: 'light'
    };

    render() {
        return (
            
            <ImageBackground
                source={require('../../../assets/images/background-image.jpg')}
                style={{ flex: 1,
                width: null,
                height: null}}
            >

                <View style={{ justifyContent: "flex-start", alignItems: "center", marginTop: 30 }}>
                    <Image
                        source={require("../../../assets/images/logowhite.png")}
                        style={{ width: SCREEN_WIDTH * 0.5 }}
                        resizeMode="contain"
                    />
                </View>
                    
                <View style={{ justifyContent: "flex-start", alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Você vai receber um código por SMS</Text>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Digite-o abaixo</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'space-around', padding:30, marginTop:125, marginBottom: 130}}>
                    <View style={{width: 50, height: 50, backgroundColor: "rgba(255,255,255,0.3)" }}>
                        <TextInput style={{ color: '#FFF', alignSelf: 'center', fontSize: 30, marginTop: 7 }} maxLength={1} autoFocus={true} keyboardType='numeric' onKeyPress={()=>this.secondTextInput.focus()}/>
                    </View>     
                    <View style={{width: 50, height: 50, backgroundColor: "rgba(255,255,255,0.3)" }}>
                        <TextInput style={{ color: '#FFF', alignSelf: 'center', fontSize: 30, marginTop: 7 }} maxLength ={1} keyboardType='numeric' ref={(input)=>this.secondTextInput = input} onKeyPress={()=>this.thirdTextInput.focus()}/>
                    </View>
                    <View style={{width: 50, height: 50, backgroundColor: "rgba(255,255,255,0.3)" }}>
                        <TextInput style={{ color: '#FFF', alignSelf: 'center', fontSize: 30, marginTop: 7 }} maxLength = {1} keyboardType='numeric' ref={(input)=>this.thirdTextInput = input} onKeyPress={()=>this.fourthTextInput.focus()}/>
                    </View>
                    <View style={{width: 50, height: 50, backgroundColor: "rgba(255,255,255,0.3)" }}>
                        <TextInput style={{ color: '#FFF', alignSelf: 'center', fontSize: 30, marginTop: 7 }} maxLength = {1} keyboardType='numeric' ref={(input)=>this.fourthTextInput = input} onKeyPress={()=>this.props.navigator.push({ screen: "app.business" })
                        }/> 
                    </View>
                </View>
                <TouchableOpacity style={{ justifyContent: "flex-start", alignItems: "center", marginBottom: 35 }} onPress={() => this.props.navigator.push({ screen:'app.smscode' })}>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Não recebeu o código?</Text>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Reenviar SMS</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
