import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: '#000000', 
        borderRadius: 8, 
        marginHorizontal: 20,
        marginVertical: 10, 
        alignItems: 'center', 
        paddingVertical: 10
    },
    buttonPrimaryOutline: {
        borderColor: '#000000', 
        borderWidth: 2,
        borderRadius: 8, 
        marginHorizontal: 20,
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    buttonPrimaryOutlineDisabled: {
        borderColor: '#CCCCCC', 
        borderWidth: 2,
        borderRadius: 8, 
        marginHorizontal: 20,
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    buttonSecondary: {
        backgroundColor: '#000000', 
        borderRadius: 8, 
        marginHorizontal: 20,
        marginVertical: 10, 
        alignItems: 'center', 
        paddingVertical: 10
    },
    buttonText: {
        color: '#FFFFFF', 
        fontWeight: 'bold'
    },
    textPrimaryDisabled: {
        color: '#CCCCCC', 
    },
    textBoldPrimary: {
        color: '#000000', 
        fontWeight: 'bold'
    },
    textBoldPrimaryDisabled: {
        color: '#CCCCCC', 
        fontWeight: 'bold'
    },
    textOpen: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0984E3'
    },
    textClose: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    }
});