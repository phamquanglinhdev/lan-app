import {View,Text,StyleSheet} from "react-native";
import OptionBox from "./OptionBox";

const MainContentArea=(props)=>{
    const user =props.data
    return (
        <View style={style.container}>
            <Text>Xin chào, {user.name}</Text>
            <Text>Email đăng nhập: {user.email}</Text>
        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20,
        backgroundColor:"white",
    }
})
export default MainContentArea;