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
whitetab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    height: SCREEN_HEIGHT*0.5,
    flex: 1,
},
photo: {
    alignItems: "center"
},
title: {
    alignItems: "center"
},
level: {
    alignItems: 'center',
    color: "#888888",
    fontSize: 12,
    marginTop: 5,
},
name: {
    color: "#888888",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
},
greentab: {
    flexDirection: 'column',
    height: SCREEN_HEIGHT*0.5,
    paddingTop: 20,
    backgroundColor: 'rgba(28,187,156,1)',
},
rowbadges: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 25,
},
badge: {
    paddingHorizontal: 18,
},
leveltab: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#FFF', 
    marginTop: -20,
    marginLeft: 28,
    justifyContent: 'center',
    alignItems: 'center',
},
level: {
    color: "#rgba(28,187,156,1)",
    fontSize: 13,
    fontWeight: "bold",

}
});

export default styles;