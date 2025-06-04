import React from 'react';
import {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ImageBackground,
            Alert, ScrollView, SafeAreaView} from 'react-native';

// UTILS
import AsyncStorage from '@react-native-async-storage/async-storage';

// FIREBASE
import auth from '@react-native-firebase/auth';

// API Endpoints
import messages from '../../api/messages';
import users from '../../api/users';


// ASSETS 
    // IMAGES
        const img_vago = require("../../assets/images/vago.png");

        
// PROPS
import propTypes from 'prop-types';


class Map extends Component {
    constructor(props){
        super(props);

        this.state = {
            Email: null,
            Name: null,
            Password: null,
        };

        

        // Bind functions
    }

    // -
    componentDidMount(){
        //Obteniendo objetos enviados desde vista anterior
        const objectPassed = this.props.route.params;
        console.log(objectPassed);

    }

    

   


    

    render() {
        const { Email, Name, Password } = this.props; // Mapea los parametros para ser usados en la vista
         
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>
                        Map
                    </Text>

                </ScrollView>
            </SafeAreaView>
          
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 30,
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
});


export default Map;