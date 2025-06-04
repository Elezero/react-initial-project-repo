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


class Explore extends Component {
    constructor(props){
        super(props);

        this.state = {
            Email: null,
            Name: null,
            Password: null,
        };


        // Bind functions
        this.performSignUp = this.performSignUp.bind(this);
    }

    // -
    componentDidMount(){
        //Obteniendo objetos enviados desde vista anterior
        const objectPassed = this.props.route.params;
        console.log(objectPassed);
    }


    performSignUp() {
        const { Email, Password} = this.state;
        console.log({ Email, Password });


        if(Email == null || Password == null || Name == null) {
            //alert("Please enter email and password");
            return;
        }

        users.post("SignUp", {
            email: Email,
            password: Password
        }).then(response_users_SignUp => {
            console.log({response_users_SignUp});
        });
    }


    

    render() {
        const { Email, Name, Password } = this.props; // Mapea los parametros para ser usados en la vista
         
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                        <Text style={styles.title}>
                            Explore
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
    subcontainer: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    subcontainer_top_margined: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 50,
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


export default Explore;