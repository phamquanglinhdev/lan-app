import {Image, Text, View,StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native";
const OptionBox = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{uri:props.src}}></Image>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center"
    },
    image : {
        width:50,
        height:50,
        borderRadius:12
    },
    title:{
        color:"white",
        fontSize:12,
        marginTop:8,
    }

});
export default OptionBox;