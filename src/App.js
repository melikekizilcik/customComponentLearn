/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Card from './components/Card';

function App(){
  return(
    <SafeAreaView style={styles.container}>
           <Card title='Eddard Stark' 
           text='Winter is coming'/>
           <Card title='Arif Işık' text='Uzaylılar tarafından kaçırıldım' />
           <Card title='Serbest' text='Ben başka şehirde miyim'/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0001',
  },
});

export default App;
