import { 
    StyleSheet,
    Dimensions 
} from 'react-native';

const CONTAINER_HEIGHT = Dimensions.get("window").height * 0.78;


const styles = StyleSheet.create({
screen: {
    flexDirection: 'column',
},
container: {
    height:CONTAINER_HEIGHT,
    marginBottom:20,
},
paragraph: {
    color: 'rgba(28,187,156,1)',
    padding: 10,
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 5,
},
rowdays: {
    flexDirection: 'row',
    marginLeft: 13,
},
columnday: {
    flexDirection: 'column',
    justifyContent : 'center',
    marginBottom:8,
    paddingHorizontal: 3,
},
circleday: {
    width: 80,
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 40, 
    borderWidth: 2, 
    borderColor: '#888888',
},
circletext1: {
    color: '#888888',
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 7,
    alignSelf: 'center',
},
circletext2: {
    color: '#888888',
    fontSize: 14,
    marginTop: -5,
    alignSelf: 'center',
},
circletext3: {
    color: '#888888',
    fontSize: 16,
    marginTop: 12,
    alignSelf: 'center', 
},
rowhours: {
    flexDirection: 'row',
    justifyContent : 'flex-start',
    flexWrap: 'wrap',
    margin: 15,
    marginTop: 63,
},
columnhour: {
    flexDirection: 'column',
    justifyContent : 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
},
boxhour: {
    width: 58,
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#888888',
},
text: {
    color: '#888888',
    fontSize: 16,
    marginTop: 4,
    alignSelf: 'center',
}
});

export default styles;