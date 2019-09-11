import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card =(props)=> {
    return (
        <View style={{...styles.cardContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer : {
        height: 200,
        width: 200,
        borderRadius: 30,
        elevation: 4
    }
})

export default Card;