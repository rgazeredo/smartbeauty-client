import { 
    StyleSheet,
    Dimensions 
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width-30;
const styles = StyleSheet.create({
container: {
    flexDirection: 'column',
    margin: 15,
    flex: 1,
},
coupon: {
    marginBottom:25,
},
linearGradient: {
    flex: 1,
},
image: {
    marginBottom: 15,
},
layer: {
    width: SCREEN_WIDTH,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    marginTop: -165,
},
line: {
    width: SCREEN_WIDTH,
    height: 2,
    backgroundColor: 'rgba(28,187,156,1)',
    marginTop: -74,
},
contentcoupon: {
    flexDirection: 'row',
    justifyContent : 'space-between',
    marginTop: -10,
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
    marginTop: -85,
    marginLeft: 68,
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
    marginLeft: 68,

},
circlediscount: {
    width: 110,
    height: 110,
    backgroundColor: '#000',
    borderRadius: 55, 
    borderWidth: 2, 
    borderColor: 'rgba(28,187,156,1)',
    marginTop: -48,
    marginRight: 10,
    
},
circletext1: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 30,
    marginTop: 24,
    alignSelf: 'center',
},
circletext2: {
    color: '#FFF',
    fontSize: 12,
    marginTop: -5,
    alignSelf: 'center',
    
},
time: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 24,
},
});

export default styles;