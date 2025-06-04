import React from 'react';
import {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ImageBackground,
            Alert, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';


// UTILS
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'


// FIREBASE
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// API Endpoints
import messages from '../../api/messages';
import users from '../../api/users';


// ASSETS 
    // IMAGES
        const img_vago = require("../../assets/images/vago.png");
    // STYLES
        const globalStyles = require('../../styles/globalStyles');

        
// PROPS
import propTypes from 'prop-types';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            Email: null,
            Password: null,
            isLoading: false,
        };

        // Bind functions
        this.performLogin = this.performLogin.bind(this);
        this.performGotoSignUp = this.performGotoSignUp.bind(this);
        this.performContinueWithoutLogin = this.performContinueWithoutLogin.bind(this);
        this.showToast = this.showToast.bind(this);
    }

    componentDidMount(){
    }

    showToast(_type, _title, _text){
        Toast.show({
            type: _type,
            text1: _title,
            text2: _text
          })
    }

    performLogin() {
        const { Email, Password } = this.state;

        if(Email == null || Password == null) {
            this.showToast("error", "Error", "Please enter email and password")

            return;
        }

        this.setState( {isLoading: true });

        auth()
            .signInWithEmailAndPassword(Email, Password)
            .then( response_login_user => {
                //console.log('User account created & signed in!');

                //this.setState( {isLoading: false });

                //GETTING NAME
                firestore()
                    .collection('users')
                    // Filter results
                    .doc(response_login_user.user.uid)
                    .get()
                    .then(response_user_data => {
                        /* ... */

                        // SAVING NAME TO SESION
                        console.log(response_user_data.data().name);
                        AsyncStorage.setItem("user_name", response_user_data.data().name);
                                
                        // GOING TO MAIN SCREENS
                        this.props.navigation.replace('MainStack');
                    });


            })
            .catch(error => {
                this.setState( {isLoading: false });
                
                if (error.code === 'auth/wrong-password') {
                    this.showToast("error", "Error", "Wrong password")
                }
                else {
                    this.showToast("error", "Error", "Invalid Crendentials")
                }
                console.error(error);
            });
    }

    performGotoSignUp(){
        this.props.navigation.navigate('SignUp', {objectToPass: "Hello"});
    }

    performContinueWithoutLogin(){
   
        auth()
            .signInAnonymously()
            .then(response_login_anon => {

                // GOING TO MAIN SCREENS
                this.props.navigation.replace('MainStack');
            })
            .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }
        
            console.error(error);
            });
    }

    render() {
        const { Email, Password } = this.props; // Mapea los parametros para ser usados en la vista
        const { isLoading } = this.state;
         
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={globalStyles.subcontainer_toast}>
                        <Toast />
                    </View>
                    

                    <Text style={globalStyles.title}>
                        Login
                    </Text>

                    <ImageBackground source={img_vago} style={globalStyles.logoImg} resizeMode="center">
                    </ImageBackground>

                    <Text style={globalStyles.label}>Email</Text>
                    <TextInput 
                        style={globalStyles.textInput} 
                        value={Email}
                        onChangeText={val => this.setState({Email: val})}
                        placeholder="Email"
                        keyboardType='email-address'
                    />

                    <Text style={globalStyles.label}>Password</Text>
                    <TextInput 
                        style={globalStyles.textInput} 
                        value={Password}
                        onChangeText={val => this.setState({Password: val})}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCorrect={false}
                    />

                    <View style={styles.subcontainer}>
                        <TouchableOpacity 
                            style={globalStyles.btn_primary}
                            onPress={this.performLogin}
                        >
                            <Text style={globalStyles.btn_primary_text}>Login</Text>
                        </TouchableOpacity>
                        <ActivityIndicator animating={isLoading}  size="large" color="#33cc33"/>
                    </View>

                    <View style={styles.subcontainer}>
                        <Text style={globalStyles.label_centered}>
                            Do not have an account?
                        </Text>
                        <TouchableOpacity style={globalStyles.btn_opaque}>
                            <Text style={globalStyles.btn_opaque_text}
                                onPress={this.performGotoSignUp}    
                            >
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subcontainer_top_margined}>
                        <TouchableOpacity 
                            style={globalStyles.btn_opaque} 
                            onPress={this.performContinueWithoutLogin}
                        >
                            <Text style={globalStyles.btn_opaque_text_secondary}>
                                Continue without login
                            </Text>
                        </TouchableOpacity>
                    </View>
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
});


export default Login;