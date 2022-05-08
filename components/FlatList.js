import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const FlatList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.rows}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
                <Ionicons
                    name="caret-forward"
                    size={24}
                    color={"#830252"}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 6,
        paddingBottom: 6,
        borderBottomWidth:0.5,
        borderStyle:"dashed",
        // paddingBottom:1,
        // marginBottom:10,
        borderBottomColor:"#ad076b",
    },
    rows: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    text: {
        color: "#ad076b",
        fontSize:18,
    }
})
export default FlatList;