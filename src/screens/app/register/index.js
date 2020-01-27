import React from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { Input, CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text'
// import { 
//     FormLabel, 
//     FormInput, 
//     FormValidationMessage, 
//     Button, 
//     CheckBox 
// } from 'react-native-elements';

import styles from '../../../assets/styles';
 
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Register extends React.Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarTextColorScheme: 'light'
    };

    state = {
        value: 0,
        activeDestination: 'eua',
        name: null,
        phone: null,
        email: null,
        birth_date: null,
        genderM: true,
        genderF: false
    }

    changeGender = (gender) => {
        if(gender == 'M') {
            this.setState({ genderM: true });
            this.setState({ genderF: false });
        } else {
            this.setState({ genderF: true });
            this.setState({ genderM: false });
        }
    }

    _register = async () => {
        let validatedParams = true;

        if(!this.state.name) {
            validatedParams = false;
            Alert.alert('Nome não informado!');
        }
        if(!this.state.phone) {
            validatedParams = false;
            Alert.alert('Telefone não informado!');
        }
        if(!this.state.email) {
            validatedParams = false;
            Alert.alert('E-mail não informado!');
        }
        if(!this.state.birth_date) {
            validatedParams = false;
            Alert.alert('Data de nascimento não informado!');
        }
        if(validatedParams) {
            this.props.navigation.navigate('Confirmation');

            // await this.setState({ isLoading: true });

            // await axios({
            //     method: 'PUT',
            //     url: `${baseUrl}/auth/register/professional`,
            //     data: this.state,
            //     headers: { 'Authorization': "beaer "+ this.state.access_token }
            // })
            // .then(async (response) => {
            //     await this.setState({ isLoading: false });

            //     this.props.navigation.navigate('App');
            // })
            // .catch((error) => {
            //     console.warn(error);

            //     // Alert.alert('Ops...', messageError, [{text: 'OK', onPress: () => this.setState({ isLoading: false })},]);
            // });
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../../../assets/images/background-image.jpg')}
                style={{ flex: 1,
                width: null,
                height: null}}
            >

                <View style={{ justifyContent: "flex-start", alignItems: "center", padding: 10, marginTop: 20, marginBottom: 10 }}>
                    <Image
                        source={require("../../../assets/images/logowhite.png")}
                        style={{ width: SCREEN_WIDTH * 0.5 }}
                        resizeMode="contain"
                    />
                </View>
                    
                <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Seja bem-vinda(o)</Text>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Complete o seu cadastro</Text>
                </View>

                <View style={{ marginTop: 20, marginBottom: 40 }}>
                    <Input
                        autoCapitalize='none'
                        keyboardType='default'
                        placeholder='Nome'
                        placeholderTextColor="#A9A9A9"
                        onChangeText={text => this.setState({ name: text })}
                        value={this.state.name}
                    />
                    <TextInputMask
                        keyboardType='number-pad'
                        placeholder='Telefone'
                        placeholderTextColor="#A9A9A9"
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={this.state.phone}
                        onChangeText={text => {
                            this.setState({
                                phone: text
                            })
                        }}
                        style={{ fontSize: 18, marginHorizontal: 10, borderBottomWidth: 1, paddingBottom: 8, paddingTop: 8, marginBottom: 10, borderBottomColor: '#86939e' }}
                    />
                    <Input
                        autoCapitalize='none'
                        keyboardType='email-address'
                        placeholderTextColor="#A9A9A9"
                        placeholder='E-mail'
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                    />
                    <TextInputMask
                        keyboardType='number-pad'
                        placeholderTextColor="#A9A9A9"
                        placeholder='Data de Nascimento'
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                          }}
                        value={this.state.birth_date}
                        onChangeText={text => {
                            this.setState({
                                birth_date: text
                            })
                        }}
                        style={{ fontSize: 18, marginHorizontal: 10, borderBottomWidth: 1, paddingBottom: 8, paddingTop: 8, borderBottomColor: '#86939e' }}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent:'center', marginBottom: 60}}>
                <CheckBox
                    center
                    title='Feminino'
                    textStyle={{ color: '#FFF' }} 
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, padding: 5, margin: 0 }}
                    checkedColor='#FFF'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.genderM}
                    onPress={ () => { this.changeGender('M') } }/>
                <CheckBox
                    center
                    title='Masculino'
                    textStyle={{ color: '#FFF' }}
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, padding: 5, margin: 0 }}
                    checkedColor='#FFF'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.genderF}
                    onPress={ () => { this.changeGender('F') } }/>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonPrimary}
                        onPress={ this._register }>
                        <Text style={styles.buttonText}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
