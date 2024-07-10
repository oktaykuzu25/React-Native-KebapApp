import React from "react";
import { SafeAreaView ,StyleSheet,Text ,View } from "react-native";
import Button from "../componenst/Button";



const Welcome = ({navigation}) => {

    function GotoMemberSing (){
        navigation.navigate('MemberSing');

    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}> Kebap Fitness  Salonu </Text>
            <Button text="Uye Kaydı oluştur" onPress={GotoMemberSing} />
        </SafeAreaView>

    );
}



const styles  = StyleSheet.create({

    container :{
flex :1,
justifyContent : 'center',
alignItems : 'center',

},
header : {
    fontSize : 30,
    fontWeight : 'bold',
    textAlign :'center',
    margin :10,

},
})

export default Welcome;
