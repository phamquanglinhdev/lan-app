import {Text,View,StyleSheet} from "react-native";

const Home = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Chào những em bé hiếu học</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    text:{
        fontSize:20
    }
})
export default Home;