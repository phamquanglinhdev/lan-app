import {StyleSheet} from "react-native";
import Constants from "expo-constants";

export const tabs = StyleSheet.create({
    optionBar: {
        flexDirection: "row",
        padding:12,
    },
    container: {
        flex: 1,
        backgroundColor: "#830252FF",
        paddingTop: Constants.statusBarHeight
    }

});