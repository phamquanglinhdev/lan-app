import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {tabs} from "./Style";
import * as SecureStore from 'expo-secure-store';
import FlatList from "../../components/FlatList";

const SettingTab = ({navigation, route}) => {
    const logout = async () => {
        await SecureStore.deleteItemAsync('token');
        let token = await SecureStore.getItemAsync("token");
        console.log(token)
        navigation.navigate("MainTab")
        route.params.navHome.navigation.navigate("Login")
    }
    return (
        <View style={tabs.container}>
            <View
                style={{
                    flex:1,
                    backgroundColor:"white",
                    padding:20,
                }}
            >
                <FlatList title={"Trang chủ"} navigation={{navigation}} icons={"home"}/>
                <FlatList title={"Trang chủ"} navigation={{navigation}} icons={"people"}/>
                <TouchableOpacity
                    onPress={()=>{
                        logout().then(r=>r)
                    }}
                >
                    <FlatList title={"Đăng xuất"} navigation={{navigation}} icons={"exit"}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SettingTab;