import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {tabs} from "./Style";
import * as SecureStore from 'expo-secure-store';
const SettingTab = ({navigation,route})=>{
    return(
        <View style={tabs.container}>
           <View style={{backgroundColor:"white",flex:1,padding:20}}>
               <TouchableOpacity
                   style={{}}
                   onPress={
                   async ()=>{
                       await SecureStore.deleteItemAsync('token', null);
                       navigation.navigate("MainTab")
                   }}
               >
                   <Text>Đăng xuất</Text>
               </TouchableOpacity>
           </View>
        </View>
    );
}

export default SettingTab;