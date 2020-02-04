import { 
    StyleSheet,
    Dimensions 
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
container: {
    flexDirection: 'column',
    flex: 1,
},
business: {
    marginBottom: 26,
},
line: {
    width: SCREEN_WIDTH,
    height: 2,
    backgroundColor: 'rgba(28,187,156,1)',
},
layer: {
    width: SCREEN_WIDTH,
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: -200,
},
name: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 5,
    marginTop: -70,
    marginLeft: 90,
},
title: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 5,
    marginTop: -8,
    marginLeft: 90,

},
});

export default styles;