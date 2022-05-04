import {SafeAreaView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Test from "./screens/Test";
import Login from "./screens/Login";
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <SafeAreaView style={{flex:1}}>
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

export default App;
