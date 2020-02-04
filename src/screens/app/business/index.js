import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { 
    Button,
    Icon 
} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Business extends Component {
    static navigatorStyle = {
        statusBarTextColorScheme: 'light'
    };

    constructor(props) {
        super(props);
        // this.props.navigator.setStyle({
        //     statusBarTextColorScheme: "light",
        //     navBarHidden: true,
        // });
        // this.props.navigator.setTitle({
        //     title: "AGENDAMENTO"
        // });

        // this.props.navigator.setOnNavigatorEvent(
        //     this.onNavigatorEvent.bind(this)
        // );
    }

    onNavigatorEvent(event) {
        if (event.type == "DeepLink") {
            this.props.navigator.push({ screen: event.link });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                
                <View style={styles.gallery}>
                    <ImageBackground
                        style={{ width: SCREEN_WIDTH, height: 220}}
                            source={require("../../../assets/images/foto1.jpg")}
                        resizeMode="cover"
                    >
                    <LinearGradient colors={['#000','transparent']} style={styles.linearGradient}>
                        <View style={styles.headerbuttons}>
                            <TouchableOpacity onPress={() => this.props.navigator.toggleDrawer({ side: 'left' })}>
                                <Icon type='font-awesome' name="bars" color='#FFF' iconStyle={styles.icons}/>
                            </TouchableOpacity>
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
                        source={require("../../../assets/images/foto2.jpg")}
                            style={{width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.title}>
                    <Text style={styles.name}>For Lady</Text> 
                    <Text style={styles.job}>SALÃO DE BELEZA</Text> 
                </View>

                <View style={styles.descriptiontab}>
                    <Text style={styles.descriptiontext}>For Lady é um espaço feminino focado em prestar um atendimento diferenciado e completo para as mulheres.</Text> 
                </View>

                <View style={styles.tab}>
                <TouchableOpacity>
                        <Text style={styles.tabs}>SERVIÇOS</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabs}>PROFISSIONAIS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.tabs}>ELOGIOS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.linetab1}/>
                <View style={styles.linetab2}/>

                <View style={styles.tab1}>
                <TouchableOpacity style={styles.tab2} onPress={() => false}>
                        <Image
                        source={require("../../../assets/images/foto16.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>SAMANTA</Text>
                        <Text style={styles.texticons}>SCHMIDT</Text>

                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.tab2} onPress={() => false}>
                        <Image
                        source={require("../../../assets/images/foto17.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>ANA</Text>
                        <Text style={styles.texticons}>CLARA</Text>

                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.tab2} onPress={() => this.props.navigation.navigate('Professional') }>
                        <Image
                        source={require("../../../assets/images/foto4.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>GERUSA</Text>
                        <Text style={styles.texticons}>BOING</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab2} onPress={() => false}>
                        <Image
                        source={require("../../../assets/images/foto18.png")}
                            style={{marginBottom: 5, width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                        resizeMode="contain"
                        />
                        <Text style={styles.texticons}>JOANA</Text>
                        <Text style={styles.texticons}>THIEL</Text>
                    </TouchableOpacity>                          
                    
                </View>

                <View style={styles.map}>
                    <Image
                        style={{ width: SCREEN_WIDTH, height: 150, borderBottomWidth: 2,
                            borderColor:'#888' }}
                            source={require("../../../assets/images/map.png")}
                        resizeMode="cover"
                    />                    
                </View>

                <View style={styles.schedule1}>
                    <Text style={styles.scheduletitle}>HORÁRIO DE ATENDIMENTO</Text>
                    <View style={styles.schedule2}>
                        <View style={styles.schedulecolumn1}>
                            <Text style={styles.schedulecontent1}>Segunda</Text> 
                            <Text style={styles.schedulecontent1}>Terça</Text>
                            <Text style={styles.schedulecontent1}>Quarta</Text>
                            <Text style={styles.schedulecontent1}>Quinta</Text>
                            <Text style={styles.schedulecontent1}>Sexta</Text>
                            <Text style={styles.schedulecontent1}>Sábado</Text>
                            <Text style={styles.schedulecontent1}>Domingo</Text>
                        </View>
                        <View style={styles.schedulecolumn2}>
                            <Text style={styles.schedulecontent2}>10:00 - 19:00</Text> 
                            <Text style={styles.schedulecontent2}>10:00 - 19:00</Text> 
                            <Text style={styles.schedulecontent2}>10:00 - 19:00</Text> 
                            <Text style={styles.schedulecontent2}>10:00 - 19:00</Text> 
                            <Text style={styles.schedulecontent2}>10:00 - 19:00</Text> 
                            <Text style={styles.schedulecontent2}>10:00 - 19:00</Text> 
                            <Text style={styles.schedulecontent2}>Fechado</Text> 
                        </View>  
                    </View>
                </View>

                <View style={styles.social}>
                    <TouchableOpacity>
                    <Icon type='font-awesome' name="phone-square" size={32} color='#4A4A4A' iconStyle={{margin:10}}  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon type='font-awesome' name="facebook-square" size={32} color='#4A4A4A' iconStyle={{margin:10}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon type='font-awesome' name="instagram" size={32} color='#4A4A4A' iconStyle={{margin:10}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon type='font-awesome' name="google-plus-square" size={32} color='#4A4A4A' iconStyle={{margin:10}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.adresstab}>
                    <Text style={styles.adress}>Rua dos Juazeiros, 211, Pedra Branca</Text>
                    <Text style={styles.adress}>Palhoça, SC - 88137-370</Text>
                </View>

                <View style={styles.footer}>
                    <Image
                        source={require("../../../assets/images/logocolor.png")}
                        style={{ width: SCREEN_WIDTH * 0.2 }}
                        resizeMode="contain"
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
    linetab1: {
        width: SCREEN_WIDTH *0.34,
        height: 2,
        backgroundColor: 'rgba(28,187,156,1)',
        alignSelf: 'center',
        elevation: 12
    },
    linetab2: {
        width: SCREEN_WIDTH,
        height: 1,
        backgroundColor: '#D0D0D0',
        alignSelf: 'flex-start',
        marginTop: -1,
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
    button: {
        marginTop: 20,
    },
    map: {
        marginTop: 20,
        marginBottom: 15,
        borderBottomWidth: 0.5,
        borderTopWidth: 1,
        borderColor:'#D7D7D7',
    },
    schedule1: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    scheduletitle: {
        color: '#9B9B9B',
        fontSize: 14,
        fontWeight: 'bold', 
        marginBottom: 5,

    },
    schedule2: {
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    schedulecolumn1: {
        paddingRight: 26,
    },
    schedulecolumn2: {
        paddingLeft: 20,
    },
    schedulecontent1: {
        color: '#888888',
        fontSize: 14,
        flexDirection: 'column',
        textAlign: 'left',
    },
    schedulecontent2: {
        color: '#888888',
        fontSize: 14,
        flexDirection: 'column',
        textAlign: 'right',
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    adresstab: {
        alignItems: 'center',
        paddingBottom: 10,
        marginTop: 5,
    },
    adress: {
        color: '#888888',
        fontSize: 14,
        textAlign: 'center',
    },
    footer: {
        marginTop: 5,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        height: 42,
    }
});

