'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    subcontainer_toast: {
        width: '100%',
        zIndex: 100000
    },
    title: {
        color: '#777777',
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 10,
        marginBottom: 30,
    },
    label: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 0,
    },
    textInput: {
        color: 'black',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        width: '100%',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        textAlign: 'center',
    },
    logoImg: {
        width: '100%',
        height: 160,
        marginBottom: 40,
    },
    btn_primary: {
        backgroundColor: '#33cc33',
        borderRadius: 40,
        padding: 15,
        width: '60%',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: "center"
    },
    btn_primary_text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    btn_opaque: {
        backgroundColor: 'transparent',
    },
    btn_opaque_text: {
        color: '#33cc33',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn_opaque_text_secondary : {
        color: '#999999',
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    label_centered: {
        textAlign: 'center',
        marginTop: 30,
    }
});