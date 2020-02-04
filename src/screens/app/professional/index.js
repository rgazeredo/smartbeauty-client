import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { 
    Button,
    Icon 
} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Professional extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarTextColorScheme: 'light'
    };
    render() {
        return (
            <View style={styles.container}>


                <View style={styles.gallery}>
                        <ImageBackground
                            style={{ width: SCREEN_WIDTH, height: 220}}
                                source={require("../../../assets/images/foto3.png")}
                            resizeMode="cover"
                        >
                        <LinearGradient colors={['#000','transparent']} style={styles.linearGradient}>

                            <View style={styles.headerbuttons}>
                                <Icon type='font-awesome' name="chevron-left" color='#FFF' iconStyle={styles.icons}/>
                                <Icon type='font-awesome' name="share" color='#FFF' iconStyle={styles.icons} />
                            </View>

                            <View style={styles.headerarrows}>
                                <Icon type='font-awesome' name="chevron-left" size={18} color='#FFF' iconStyle={styles.icons} />
                                <Icon type='font-awesome' name="chevron-right" size={18} color='#FFF' iconStyle={styles.icons} />
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
                    <Text style={styles.descriptiontext}>Estetacosmetóloga e estudante de Biomedicina, agora estou atendendo no espaço For Lady, na Pedra Branca, em Palhoça.</Text> 
                </View>

                <View style={styles.tab}>
                    <Text style={styles.tabs}>SERVIÇOS</Text> 
                    <Text style={styles.tabsactive}>ELOGIOS</Text>
                </View>
                <View style={styles.linetab1}/>
                <View style={styles.linetab2}/>

                <View style={styles.tab1}>
                    <View style={styles.tab2}>
                        <Image
                        source={require("../../../assets/images/foto12.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>MÃOS</Text>
                        <Text style={styles.texticons}>LEVES</Text>

                    </View>   
                    <View style={styles.tab2}>
                        <Image
                        source={require("../../../assets/images/foto9.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>ÓTIMO</Text>
                        <Text style={styles.texticons}>PAPO</Text>

                    </View>   
                    <View style={styles.tab2}>
                        <Image
                        source={require("../../../assets/images/foto10.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>SUPER</Text>
                        <Text style={styles.texticons}>PONTUAL</Text>
                    </View>
                    <View style={styles.tab2}>
                        <Image
                        source={require("../../../assets/images/foto11.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>AMBIENTE</Text>
                        <Text style={styles.texticons}>LIMPO</Text>
                    </View>                          
                    
                </View>                        

                <View style={styles.button}>
                    <Button
                        backgroundColor="#1CBB9C"
                        color="#FFF"
                        borderRadius={5}
                        title="AGENDAR UM HORÁRIO"
                        onPress={() =>
                            this.props.navigator.push({ screen: "app.appoint1" })
                        }
                    />
                </View>

                <View style={styles.footer}>
                    <Image
                        source={require("../../../assets/images/logocolor.png")}
                        style={{ width: SCREEN_WIDTH * 0.2 }}
                        resizeMode="contain"
                    />
                </View>

            </View>

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
    headerarrows: {
        marginTop: 40,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    icons: {
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
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    descriptiontext: {
        color: '#888888',
        fontSize: 14,
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15,
    },
    tabsactive: {
        color: 'rgba(28,187,156,1)',
        fontSize: 16,
    },
    tabs: {
        color: '#888888',
        fontSize: 16,
    },
    tab1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 15,
        marginTop: 20,
    },
    tab2: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    texticons: {
        color: '#888888',
        fontSize: 14,
    },
    linetab1: {
        width: SCREEN_WIDTH * 0.5,
        height: 2,
        backgroundColor: 'rgba(28,187,156,1)',
        alignSelf: 'flex-end',
        elevation: 12
    },
    linetab2: {
        width: SCREEN_WIDTH,
        height: 1,
        backgroundColor: '#D0D0D0',
        alignSelf: 'flex-start',
        marginTop: -1,
    },
    button: {
        marginTop: 20,
    },
    footer: {
        marginTop: 15,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        height: 42,
    }
    
});

