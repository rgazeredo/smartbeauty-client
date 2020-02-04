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
notification: {
    marginBottom:25,
},
line: {
    width: SCREEN_WIDTH,
    height: 1,
    backgroundColor: '#888888',
    alignSelf: 'flex-end',
    marginTop: 10,
},
linenew: {
    width: SCREEN_WIDTH,
    height: 1,
    backgroundColor: 'rgba(28,187,156,1)',
    alignSelf: 'flex-end',
    marginTop: 10,
},
content: {
    flexDirection: 'row',
    justifyContent : 'space-between',
},
title: {
    color: '#4A4A4A',
    fontSize: 18,
    padding: 5,
    marginTop: -55,
    marginLeft: 68,
},
name: {
    color: '#9B9B9B',
    fontSize: 14,
    padding: 5,
    marginTop: -8,
    marginLeft: 68,

},
time: {
    color: '#9B9B9B',
    fontSize: 14,
    padding: 5,
    marginTop: 29   ,
},
titlenew: {
    color: 'rgba(28,187,156,1)',
    fontSize: 18,
    padding: 5,
    marginTop: -55,
    marginLeft: 68,
},
namenew: {
    color: 'rgba(28,187,156,1)',
    fontSize: 14,
    padding: 5,
    marginTop: -8,
    marginLeft: 68,

},
timenew: {
    color: 'rgba(28,187,156,1)',
    fontSize: 14,
    padding: 5,
    marginTop: 29   ,
},
});

export default styles;