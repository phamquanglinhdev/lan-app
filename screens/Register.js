import React, {useState} from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import {styles} from "./Login";
import axios from "axios";
const Register = ({navigation})=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");
    const submit = async ()=>{
        if (name === "") alert("Vui lòng nhập tên")
        else if(email==="") alert("Vui lòng nhập email")
        else if(password==="") alert("Vui lòng mật khẩu")
        else if(password!== confirm) alert("Nhập lại mật khẩu chưa chính xác")
        else {
            axios({
                baseURL: process.env.API_URL,
                method: 'POST',
                url: '/register',
                data: {
                    "email": email,
                    "password": password,
                    "name":name,
                }
            }).then(function (response) {
                console.log(response.data)
                alert("Đăng ký thành công");
                setName("");
                setEmail("");
                setPassword("");
                setConfirm("");
                navigation.goBack();
            }).catch(function (errors) {
                console.log(errors)
                alert("Đăng ký lỗi, vui lòng thử lại")
            })
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={"Họ và tên"}
                onChangeText={newText => setName(newText)}
            />
            <TextInput
                style={styles.textInput}
                placeholder={"Email"}
                onChangeText={newText => setEmail(newText)}
            />
            <TextInput
                style={styles.textInput}
                placeholder={"Mật khẩu"}
                secureTextEntry={true}
                onChangeText={newText => setPassword(newText)}
            />
            <TextInput
                style={styles.textInput}
                placeholder={"Nhập lại mật khẩu"}
                secureTextEntry={true}
                onChangeText={newText => setConfirm(newText)}
            />
            <TouchableOpacity
                onPress={
                    async () => {
                        await submit()
                    }}
            >
                <Text style={styles.loginTxt}>
                    ĐĂNG KÝ
                </Text>
            </TouchableOpacity>
            <View style={styles}>
                <TouchableOpacity
                    onPress={()=>{
                        setName("");
                        setEmail("");
                        setPassword("");
                        setConfirm("");
                        navigation.goBack();
                    }}
                >
                    <Text style={{fontSize: 18, color: "white",padding:12}}>Bạn đã có tài khoản ? Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default Register;