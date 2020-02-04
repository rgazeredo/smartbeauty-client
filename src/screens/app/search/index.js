import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { 
    Button,
    Icon,
} from 'react-native-elements';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Search extends Component {
    // static navigatorStyle = {};
    //     constructor(props) {
    //     super(props);
    //      this.props.navigator.setStyle({
    //         statusBarTextColorScheme: 'light',
    //         navBarBackgroundColor: '#000',
    //         navBarButtonColor: '#FFF',
    //      }); 
    // }

    static navigatorButtons = {
        leftButtons: [
          {
            //icon: require('../../img/navicon_menu.png'),
            title: 'Menu',
            id: 'menu'
          }
        ],
        rightButtons: [
          {
            title: 'EDIT',
            id: 'edit'
          },
          
        ]
      };

    
    render() {
        return ( 
            <ScrollView style={styles.container}>

                <TouchableOpacity style={styles.business}>
                    <View style={styles.image}>
                        <Image 
                            style={{ width: SCREEN_WIDTH, height: 200}}
                            source={require("../../../assets/images/foto1.jpg")}
                            resizeMode="cover" >
                        </Image>
                    </View>
                    <View style={styles.layer}/>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <Image
                            source={require("../../../assets/images/foto2.jpg")}
                            style={{marginLeft:10, marginTop:-92, width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                        <View style={styles.left}>
                            <Icon type='font-awesome' name="map-marker" color='#FFF' iconStyle={styles.icon}/>
                            <Text style={styles.distance}>950m</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>For Lady</Text>
                    <Text style={styles.title}>SALÃO DE BELEZA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.business}>
                    <View style={styles.image}>
                        <Image 
                            style={{ width: SCREEN_WIDTH, height: 200}}
                            source={require("../../../assets/images/foto5.png")}
                            resizeMode="cover" >
                        </Image>
                    </View>
                    <View style={styles.layer}/>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <Image
                            source={require("../../../assets/images/foto8.jpg")}
                            style={{marginLeft:10, marginTop:-92, width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                        <View style={styles.left}>
                            <Icon type='font-awesome' name="map-marker" color='#FFF' iconStyle={styles.icon}/>
                            <Text style={styles.distance}>1.5Km</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>Ana Maria Leme</Text>
                    <Text style={styles.title}>CABELEREIRA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.business}>
                    <View style={styles.image}>
                        <Image 
                            style={{ width: SCREEN_WIDTH, height: 200}}
                            source={require("../../../assets/images/foto6.png")}
                            resizeMode="cover" >
                        </Image>
                    </View>
                    <View style={styles.layer}/>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <Image
                            source={require("../../../assets/images/foto7.jpg")}
                            style={{marginLeft:10, marginTop:-92, width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: 'rgba(28,187,156,1)'}}
                            resizeMode="contain"
                        />
                        <View style={styles.left}>
                            <Icon type='font-awesome' name="map-marker" color='#FFF' iconStyle={styles.icon}/>
                            <Text style={styles.distance}>3Km</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>Mustache</Text>
                    <Text style={styles.title}>BARBEARIA</Text>
                </TouchableOpacity>
                             
            
            </ScrollView>

        )
    }
}
