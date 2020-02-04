import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
// import { 
//     FormLabel, 
//     FormInput, 
//     FormValidationMessage, 
//     Button, 
//     CheckBox,
// } from 'react-native-elements';

import { Input, CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text'

import styleGlobal from '../../../assets/styles';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Filters extends Component {
    // static navigatorStyle = {};
    //     constructor(props) {
    //     super(props);
    //     this.props.navigator.setStyle({
    //         statusBarTextColorScheme: 'light',
    //         navBarBackgroundColor: '#000',
    //         navBarButtonColor: '#FFF',
    //     }); 
    //     this.props.navigator.setTitle({
    //         title: "FILTROS" 
    //     });
    // }

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            service_type: null,
            service: null,
            location: null,
            radius: null,
        }
    }

    render() {
        return (
            <View>
                <View style={styles.form1}>
                    <Input
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Pesquise pelo nome do lugar ou da(o) profissional'
                        placeholderTextColor="#A9A9A9"
                        onChangeText={text => this.setState({ name: text })}
                        value={this.state.name}
                    />            
                </View>

                <View style={styles.form2}>
                    <Input
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Tipo de Serviço'
                        placeholderTextColor="#A9A9A9"
                        onChangeText={text => this.setState({ service_type: text })}
                        value={this.state.service_type}
                    />
                    <Input
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Serviço'
                        placeholderTextColor="#A9A9A9"
                        onChangeText={text => this.setState({ service: text })}
                        value={this.state.service}
                    />
                    <Input
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Localização'
                        placeholderTextColor="#A9A9A9"
                        onChangeText={text => this.setState({ location: text })}
                        value={this.state.location}
                    />
                    <Input
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Distâcia Máxima'
                        placeholderTextColor="#A9A9A9"
                        onChangeText={text => this.setState({ radius: text })}
                        value={this.state.radius}
                    />
                </View>

                <TouchableOpacity style={styles.clear}>
                    <Text style={styles.text2}>LIMPAR TUDO</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity style={styleGlobal.buttonPrimary}>
                        <Text style={styleGlobal.buttonText}>MOSTRAR RESULTADOS</Text>
                    </TouchableOpacity>
                    {/* <Button
                        backgroundColor="#1CBB9C"
                        color="#FFFFFF"
                        borderRadius={5}
                        title="MOSTRAR RESULTADOS"
                        onPress={() =>
                            this.props.navigator.push({ screen: "app.search" })
                        }
                    /> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    
    container2: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text: { 
        color: '#FFF',
        fontSize: 14,
    },
    text2: {
        color: '#000',
        fontSize: 16,
    },
    form1: {
        marginTop: 40,
        marginBottom: 40,
    },
    form2: {
        marginTop: 18,
        marginBottom: 40,
    },
    clear: {
        alignItems: 'center',
        marginBottom: 40,
    }
});
