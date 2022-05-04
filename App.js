import {SafeAreaView,StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Test from "./screens/Test";
import Login from "./screens/Login";
import {StatusBar} from "expo-status-bar";
import Constants from "expo-constants";
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <SafeAreaView style={styles.main}>
           <NavigationContainer>
               <Stack.Navigator initialRouteName="Login">
                   <Stack.Screen
                        name={"Home"}
                        component = {Home}
                        options={{headerShown: false}}
                   />
                   <Stack.Screen
                       name={"Test"}
                       component={Test}
                   />
                   <Stack.Screen
                       name={"Login"}
                       component={Login}
                       options={{headerShown: false}}
                   />
               </Stack.Navigator>
           </NavigationContainer>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main:{
        flex:1,
    }
})
export default App;
