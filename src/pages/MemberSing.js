import React ,{useState }from "react";
import { Alert, SafeAreaView, StyleSheet, Text } from "react-native";
import Input from "../componenst/Input";
import Button from "../componenst/Button";



const Sing = ( {navigation} ) => {
    const [userName,setUserName] = React.useState(null);
    const [userSurName,setSurName] = React.useState(null);
    const [userEmail,setEmail] = React.useState(null);
    const [userAge,setAge] = React.useState(null);

    function handleSubmit(){
        if (   !userName ||  !userSurName|| !userEmail||  !userAge ){
            Alert.alert('Kebap fitness salonu' , 'Bilgilerinizi lütfen boş bırakmayınız.');
        }
        const user = {
           userName,
          userSurName,
            userEmail,
            userAge,
        };
       navigation.navigate('MemberResult' , {user});
    }
    return(

        <SafeAreaView>
            <Text style={styles.text}>  Üye Kayıt Ol </Text>
         <Input label="Uye Adı : "  placeholder="üye ismini giriniz." onChangeText={setUserName}/>
         <Input label="Uye Soyadı : "  placeholder="üye soy ismini giriniz." onChangeText={setSurName}/>
         <Input label="Email  : "  placeholder="üye email  giriniz." onChangeText={setEmail}/>
         <Input label=" Yaş  : "  placeholder="üye yaş giriniz." onChangeText={setAge}/>
         <Button text="Üye kaydını tamamla"  onPress={handleSubmit}/>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  text :{
 color : 'blue',
 fontSize : 18,
   textAlign :'center',
   fontWeight :'bold',
   marginTop : 10,
  },

})
export default Sing;