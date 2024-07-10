import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";



const Result = ({route}) => {
const {user} = route.params;

    return(
<SafeAreaView>
   <Text style={styles.label}> Üye Adı : {user.userName} </Text>
   <Text style={styles.label}> Üye Soyadı : {user.userSurName}  </Text>
   <Text style={styles.label}> Üye Email  : {user.userEmail}  </Text>
   <Text style={styles.label}> Üye Yaş : {user.userAge} </Text>

</SafeAreaView>
    );
}


const styles = StyleSheet.create({
label : {
    fontWeight : 'bold',
    fontSize : 30,
    margin : 5,

},


});

export default Result;