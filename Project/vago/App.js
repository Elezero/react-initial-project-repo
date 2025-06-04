/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Component, PureComponent } from 'react';

// VIEWS
import Login from './app/views/login';


// NAVIGATION
//import AppStack from './app/navigator/stack';
import MasterNavigator from './app/navigator/masterNavigator';


class App extends PureComponent {
  state = {};

  constructor(props){
    super(props);

    this.state = {
      //counter: 0,
    }


    //this.handleUp = this.handleUp.bind(this);
    
  }


  // componentDidMount(){
  //   // Para peticiones async a un servidor
  //   console.log("Mounted");
  // }


  // handleUp(){
  //   const {counter: ct} = this.state;
  //   this.setState({counter: ct + 1})
  // }

  

  render() {
    //const { counter } = this.state;

    return (
      <MasterNavigator />
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
