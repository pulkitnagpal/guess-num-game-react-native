import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NumberContainer = (props) => {
    return (
        <View style={{...styles.finalValueContainer, ...props.style}}>
            <Text style={styles.finalValue}>{props.finalValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    finalValueContainer : {
        width: 70,
        borderColor: 'grey',
        borderRadius: 20,
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
        marginVertical: 20
    },
    finalValue : {
        fontWeight: 'bold',
        fontSize: 20,
    }
})  


export default NumberContainer