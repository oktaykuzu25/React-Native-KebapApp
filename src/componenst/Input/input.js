import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from './input.style';



const input  = ({label , onChangeText , placeholder}) => {

    return(
        <SafeAreaView style={styles.container}>
           
                <Text style={styles.label}> {label} </Text>
                <View style={styles.input_container}>
            <TextInput onChangeText={onChangeText}  placeholder={placeholder} style={styles.input} />

            </View>
        </SafeAreaView>

    );
}


export default input;