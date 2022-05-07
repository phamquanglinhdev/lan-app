import {Text, View, StyleSheet, Alert, BackHandler} from "react-native";
import OptionBox from "../../components/OptionBox";
import {SafeAreaView} from "react-native";
import SearchBar from "../../components/SearchBar";
import MainContentArea from "../../components/MainContentArea";
import {tabs} from "./Style";
import {useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';
import axios, {Axios} from "axios";

const MainTab = ({route, navigation}) => {
    route.params.navHome.navigation.addListener(
        'focus',
         async ()=>{
             const token = await SecureStore.getItemAsync("token");
             if (token == null) {
                 route.params.navHome.navigation.navigate("Login")
             } else {
                 console.log(process.env.API_URL)
                 axios({
                     baseURL: process.env.API_URL,
                     method: 'GET',
                     url: 'user',
                     headers: {
                         "Authorization": token,
                     }
                 }).then(function (response) {
                     console.log(response.data);
                     setUserData(response.data)
                 }).catch(function (){
                     route.params.navHome.navigation.navigate("Login")
                 })
             }
        }
    );
    const [userData,setUserData]=useState({})
    const logo = process.env["LOGO_URL"];
    return (
        <SafeAreaView style={tabs.container}>
            <SearchBar/>
            <View style={tabs.optionBar}>
                <OptionBox title={"Đây"} src={logo}/>
                <OptionBox title={"Là"} src={logo}/>
                <OptionBox title={"Lan"} src={logo}/>
                <OptionBox title={"Trần ."} src={logo}/>
            </View>
            <MainContentArea data={userData}/>
        </SafeAreaView>
    );
}
export default MainTab;