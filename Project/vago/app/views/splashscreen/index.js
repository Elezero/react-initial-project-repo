import React from 'react';
import {Component} from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView} from 'react-native';



// FIREBASE
import auth from '@react-native-firebase/auth';

// ASSETS 
    // IMAGES
        const img_vago = require("../../assets/images/vago.png");

        
// PROPS
import propTypes from 'prop-types';


class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            user: null,
        };

        this.checkIfLogged = this.checkIfLogged.bind(this);
    }
    
    checkIfLogged(){
        //const { user } = this.state;
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
                this.props.navigation.replace('MainStack');
            }
            else { // not logged
                this.props.navigation.replace('LoginStack');
            }
      });
    }


    // -
    componentDidMount(){
        setTimeout(
            function() {
                this.checkIfLogged();
            }
            .bind(this),
            3000
          );
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={img_vago} style={styles.logoImg} resizeMode="center">
                </ImageBackground>
                <Text style={styles.appName}>Vago App</Text>
                <Text style={styles.appSlogan}>let's go sightseeing</Text>
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
        justifyContent: 'center'
    },
    appName: {
        color: '#999',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 0,
        textAlign: 'center'
    },
    appSlogan: {
        color: '#999',
        fontSize: 20,
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'center'

    },
    logoImg: {
        width: '100%',
        height: 160,
        marginBottom: 40,
    },
});


export default SplashScreen;