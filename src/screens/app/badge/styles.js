import { 
    StyleSheet,
    Dimensions 
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
container: {
    flexDirection: 'column',
    flex: 1,
},
tab: {
    flexDirection: 'column',
    height: SCREEN_HEIGHT,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
},
badge: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
},
descriptiontab: {
    
},
descriptiontext: {
    color: '#888888',
    fontSize: 14,
    textAlign: 'center',
},
title: {
    alignItems: "center"
},
name: {
    color: "#888888",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
},
leveltab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(28,187,156,1)',
    backgroundColor: '#FFF', 
    marginTop: -35,
    justifyContent: 'center',
    alignItems: 'center',
},
level: {
    color: 'rgba(28,187,156,1)',
    fontSize: 32,
    fontWeight: "bold",

}
});

export default styles;