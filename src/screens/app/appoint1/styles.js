import { 
    StyleSheet,
    Dimensions 
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width-103;
const styles = StyleSheet.create({
container: {
    flexDirection: 'column',
    margin: 15,
    flex: 1,
},
paragraph: {
    color: 'rgba(28,187,156,1)',
    marginTop: 15,
    marginBottom: 30,
},
service: {
    marginBottom:25,
},
content: {
    flexDirection: 'row',
    justifyContent : 'space-between',
},
category: {
    color: '#888888',
    fontSize: 18,
    padding: 5,
    marginTop: -55,
    marginLeft: 68,
},
genre: {
    color: '#888888',
    fontSize: 14,
    padding: 5,
    marginTop: -8,
    marginLeft: 68,
},
});

export default styles;