//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const MyButton = ({text,action}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={{color:"white", fontSize:30}}>{text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'violet',
        flex:1
    },
});

//make this component available to the app
export default MyButton;
