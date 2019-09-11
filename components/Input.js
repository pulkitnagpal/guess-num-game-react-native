import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.inputField, ...props.style}}></TextInput>
    )
}

const styles = StyleSheet.create({
    inputField : {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    }
})
export default Input