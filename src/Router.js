import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome  from "./pages/WelcomeScreen";
import Sing from "./pages/MemberSing";
import Result from "./pages/MemberResult";


const Stack = createNativeStackNavigator();

const App = () => {


    return (
        <NavigationContainer>
             <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="WelcomeScreen" component={Welcome}/>

       <Stack.Screen name="MemberSing" component={Sing}/>
       <Stack.Screen name="MemberResult" component={Result}/>
      </Stack.Navigator>
        </NavigationContainer>

    );
}



export default App;

