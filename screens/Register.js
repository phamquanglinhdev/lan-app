import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Register = ()=>{
    return (
        <View>

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ad076b",
        padding: 20
    },
    textInput: {
        fontSize: 18,
        padding: 15,
        marginBottom: 15,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 8,
    },
    image: {
        width: 180,
        height: 180,
        marginBottom: 20,
        borderRadius: 20,
    },
    loginTxt: {
        backgroundColor: "#830252",
        padding: 12,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 12,
        color: "white",
        fontSize: 18,
    },
    rows: {
        flexDirection: "row",
        width: "100%",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "stretch",
    },
})
export default Register;