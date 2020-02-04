import { 
    StyleSheet,
    Dimensions 
} from 'react-native';

const CONTAINER_HEIGHT = Dimensions.get("window").height * 0.78;


const styles = StyleSheet.create({
screen: {
    flexDirection: 'column',
    alignContent: 'space-between',
},
container: {
    padding: 10,
    height:CONTAINER_HEIGHT,
    marginBottom:20,
},
paragraph: {
    color: 'rgba(28,187,156,1)',
    marginTop: 20,
    marginBottom: 25,
    marginLeft: 5,
},
service: {
    marginBottom:8,
},
content: {
    flexDirection: 'row',
    justifyContent : 'space-between',
},
services: {
    color: '#888888',
    fontSize: 18,
    padding: 5,
    marginTop: -49,
    marginLeft: 68,
},
price: {
    color: '#888888',
    fontSize: 14,
    padding: 5,
    marginTop: -8,
    marginLeft: 68,
},
time: {
    color: '#9B9B9B',
    fontSize: 14,
    padding: 5,
    marginTop: 18,
},
button: {
},
});

export default styles;