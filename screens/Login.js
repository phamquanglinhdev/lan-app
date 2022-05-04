import {StyleSheet, View} from "react-native";
import {Text} from "react-native";
import {TextInput} from "react-native";
import {Image} from "react-native";
import {TouchableOpacity} from "react-native";
import {useState} from "react";
const logo_link = process.env["LOGO_URL"];
const Login = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submit = () => {
        if(username==="") alert("Nhập user name")
        else if(password==="") alert("Nhập password")
        else {
            alert("Login Successfully")
            navigation.navigate("Home")
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: logo_link}}
            />
            <TextInput
                style={styles.textInput}
                placeholder={"Tên tài khoản"}
                onChangeText={newText => setUsername(newText)}
            />
            <TextInput
                style={styles.textInput}
                placeholder={"Mật khẩu"}
                secureTextEntry={true}
                onChangeText={newText => setPassword(newText)}
            />
            <TouchableOpacity
                onPress={()=>{
                    submit()
                }}
            >
                <Text style={styles.loginTxt}>
                    ĐĂNG NHẬP
                </Text>
            </TouchableOpacity>
            <View style={styles.rows}>
                <Text style={{fontSize:18,color: "white"}}>TẠO TÀI KHOẢN</Text>
                <Text style={{fontSize:18,color: "white"}}>QUÊN MẬT KHẨU</Text>
            </View>
        </View>
    )
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
        fontSize: 20,
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
    rows:{
        flexDirection:"row",
        width:"100%",
        padding:10,
        justifyContent:"space-between",
        alignItems:"stretch",
    },
})
export default Login;