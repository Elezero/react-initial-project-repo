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
import firebase from '@react-native-firebase/app';

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


class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            Email: null,
            Name: null,
            Password: null,
            isLoading: false,
        };


        // Bind functions
        this.performSignUp = this.performSignUp.bind(this);
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


    performSignUp() {
        const { Email, Password, Name} = this.state;

        this.setState( {isLoading: true });

        if(Email == null || Password == null || Name == null) {
            this.showToast("error", "Error", "Please enter Email, Name and Password")
            this.setState( {isLoading: false });
            return;
        }

        let today_date = Date.now();
        let today_timeStamp =  new Intl.DateTimeFormat('en-US', {
                year: 'numeric', 
                month: '2-digit',
                day: '2-digit', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit'
            }).format(today_date);

        auth()
            .createUserWithEmailAndPassword (Email, Password, Name)
            .then( response_signup_user => {
                //console.log('User account created & signed in!');

                // SETTING ACCOUNT NAME
                // METHOD 1
                firestore()
                    .collection('users')
                    .doc(response_signup_user.user.uid)
                    .set({
                        account_type: 0,
                        country: 'El Salvador',
                        created_date: firebase.firestore.FieldValue.serverTimestamp(),
                        enabled: true,
                        lowercase_name: Name.toLowerCase(),
                        name: Name,
                        uid: response_signup_user.user.uid
                    })
                    .then(() => {
                        console.log("USER UPDATED");
                        //console.log(user);

                        // SAVING SESSION
                        //AsyncStorage.setItem("user",JSON.stringify(user));
                        AsyncStorage.setItem("user_name", Name);

                        // GOING TO MAIN SCREENS
                        this.props.navigation.replace('MainStack');
                    });

                // METHOD 2
                /*response_signup_user.user.updateProfile({displayName: Name})
                    .then( () => {
                        this.setState( {isLoading: false });

                        //var { user } = response_signup_user;
                        // Locally
                        //user.displayName = Name;

                        //console.log("USER UPDATED");
                        //console.log(user);

                        // SAVING SESSION
                        //AsyncStorage.setItem("user",JSON.stringify( user));

                        // GOING TO MAIN SCREENS
                        this.props.navigation.replace('MainStack');
                    })
                    .catch(err => {
                        console.log("Error: "+ err);
                    })*/
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    console.log('Wrong password');
                }
                this.setState( {isLoading: false });

                this.showToast("error", "Error", "Email aready registered or incorrect information");
            
                console.error(error);
            });
    }


    

    render() {
        const { Email, Name, Password } = this.props; // Mapea los parametros para ser usados en la vista
        const { isLoading } = this.state;
         
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={globalStyles.subcontainer_toast}>
                        <Toast/>
                    </View>
                    <Text style={globalStyles.title}>
                        Sign Up
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
                    <Text style={globalStyles.label}>Name</Text>
                    <TextInput 
                        style={globalStyles.textInput} 
                        value={Name}
                        onChangeText={val => this.setState({Name: val})}
                        placeholder="Full Name"
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
                            onPress={this.performSignUp}
                        >
                            <Text style={globalStyles.btn_primary_text}>Sign Up</Text>
                        </TouchableOpacity>
                        <ActivityIndicator animating={isLoading}  size="large" color="#33cc33"/>
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


export default SignUp;