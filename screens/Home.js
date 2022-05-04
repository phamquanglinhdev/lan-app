import {Text,View,StyleSheet} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import MainTab from "./tabs/MainTab";
import HowTab from "./tabs/HowTab";
import {NavigationContainer} from "@react-navigation/native";
import CategoryTab from "./tabs/CategoryTab";
import UserTab from "./tabs/UserTab";
import SettingTab from "./tabs/SettingTab";
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";

const Tab = createBottomTabNavigator();
const Home = () =>{
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#830252',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name="MainTab"
                    component={MainTab}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Trang chủ",
                        tabBarIcon: (tabInfo) => {
                            return (
                                <Ionicons
                                    name="md-home"
                                    size={24}
                                    color={tabInfo.focused ? "#830252" : "#8e8e93"}
                                />
                            );
                        },
                    }}/>
                <Tab.Screen
                    name="CategoryTab"
                    component={CategoryTab}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Danh mục",
                        tabBarIcon: (tabInfo) => {
                            return (
                                <Ionicons
                                    name="md-copy"
                                    size={24}
                                    color={tabInfo.focused ? "#830252" : "#8e8e93"}
                                />
                            );
                        },
                }}
                />
                <Tab.Screen
                    name="UserTab"
                    component={UserTab}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Tôi",
                        tabBarIcon: (tabInfo) => {
                            return (
                                <Ionicons
                                    name="md-person"
                                    size={24}
                                    color={tabInfo.focused ? "#830252" : "#8e8e93"}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="SettingTab"
                    component={SettingTab}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Cài đặt",
                        tabBarIcon: (tabInfo) => {
                            return (
                                <Ionicons
                                    name="md-settings"
                                    size={24}
                                    color={tabInfo.focused ? "#830252" : "#8e8e93"}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:Constants.statusBarHeight +12

    },
    text:{
        fontSize:20
    }
})
export default Home;