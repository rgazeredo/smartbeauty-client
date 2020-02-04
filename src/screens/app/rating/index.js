import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { 
    Button,
    Icon 
} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Input } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Rating extends Component {
//     static navigatorStyle = {};
//       constructor(props) {
//       super(props);
//       this.props.navigator.setStyle({
//           statusBarTextColorScheme: 'light',
//           navBarBackgroundColor: '#000',
//           navBarButtonColor: '#FFF',
//       });
//       this.props.navigator.setTitle({
//         title: "AVALIAÇÃO" 
//     });
//   }

constructor(props) {
    super(props);

    this.state = {
        name: null
    }
}

    render() {
        return (
            <ScrollView style={styles.container}>


                <View style={styles.gallery}>
                        <ImageBackground
                            style={{ width: SCREEN_WIDTH, height: 180}}
                                source={require("../../../assets/images/foto3.png")}
                            resizeMode="cover"
                        >
                        <LinearGradient colors={['#000','transparent']} style={styles.linearGradient}>

                            <View style={styles.feedbackprotab}>
                                <Text style={styles.feedbackpro}>“Adorei a nossa sessão hoje, pois foi muito produtiva. Você está cada dia mais linda. Tenha uma ótima semana! Beijos”</Text>
                            </View>
                        </LinearGradient>
                        </ImageBackground> 
  
                    </View>

                <View style={styles.photo}>
                    <View>
                        <Image
                        source={require("../../../assets/images/foto4.png")}
                            style={{width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.title}>
                    <Text style={styles.name}>Gerusa Boing</Text> 
                    <Text style={styles.job}>ESTETOCOSMETÓLOGA</Text> 
                </View>

                <View style={styles.descriptiontab}>
                    <Text style={styles.descriptiontext}>E você, o que achou do seu atendimento hoje?</Text> 
                </View>

                <View style={styles.tab}>
                    <TouchableOpacity>
                        <Image
                            source={require("../../../assets/images/foto13.png")}
                                style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../../../assets/images/foto14.png")}
                                style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30}}
                            resizeMode="contain"
                        />   
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../../../assets/images/foto15.png")}
                                style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30}}
                            resizeMode="contain"
                        />   
                    </TouchableOpacity>  
                                     
                </View>

                <View style={styles.descriptiontab}>
                    <Text style={styles.descriptiontext}>Gostaria de enviar um elogio?</Text> 
                </View>

                <View style={styles.tab}>
                    <View style={styles.tab2}>
                        <TouchableOpacity>
                            <Image
                            source={require("../../../assets/images/foto12.png")}
                                style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        
                        <Text style={styles.texticons}>MÃOS</Text>
                        <Text style={styles.texticons}>LEVES</Text>

                    </View>  
                    <View style={styles.tab2}>
                        <TouchableOpacity>
                            <Image
                            source={require("../../../assets/images/foto9.png")}
                                style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        
                        <Text style={styles.texticons}>ÓTIMO</Text>
                        <Text style={styles.texticons}>PAPO</Text>

                    </View>   
                    <View style={styles.tab2}>
                        <TouchableOpacity>
                            <Image
                            source={require("../../../assets/images/foto10.png")}
                                style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        
                        <Text style={styles.texticons}>SUPER</Text>
                        <Text style={styles.texticons}>PONTUAL</Text>
                    </View>
                    <View style={styles.tab2}>
                        <TouchableOpacity>
                            <Image
                            source={require("../../../assets/images/foto11.png")}
                                style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        
                        <Text style={styles.texticons}>AMBIENTE</Text>
                        <Text style={styles.texticons}>LIMPO</Text>
                    </View>                          
                    
                </View>

                <View style={styles.form1}>
                        <Input
                            autoCapitalize='none'
                            keyboardType='default'
                            placeholder='Deixe aqui seu comentário'
                            placeholderTextColor="#A9A9A9"
                            onChangeText={text => this.setState({ name: text })}
                            value={this.state.name}
                        />            
                    </View>


                <View style={styles.button}>
                    <Button
                        backgroundColor="#1CBB9C"
                        color="#FFF"
                        borderRadius={5}
                        title="ENVIAR"
                        onPress={() =>
                            this.props.navigator.push({ screen: "app.coupon" })
                        }
                    />
                </View>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    gallery: {
        borderBottomWidth: 2,
        borderColor:'rgba(28,187,156,1)', 
    },
    linearGradient: {
        flex: 1,
    },
    headerbuttons: {
        marginTop: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    feedbackprotab: {
        marginTop: 40,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    feedbackpro: {
        color: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding:15,
    },
    photo: {
        marginTop: -52,
        alignItems: 'center',
    },
    title: {
    alignItems: 'center',
    },
    name: {
        color: '#4A4A4A',
        fontSize: 22,
        fontWeight: 'bold',
    },
    job: {
        color: '#9B9B9B',
        fontSize: 12,
    },
    descriptiontab: {
        padding: 15,
        alignItems: 'center',
    },
    descriptiontext: {
        color: '#888888',
        fontSize: 16,
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 30,
    },
    tab2: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabs: {
        color: '#888888',
        fontSize: 16,
    },
    button: {
        marginTop: 10,
    },
    texticons: {
        color: '#888888',
        fontSize: 14,
    },
    
});

