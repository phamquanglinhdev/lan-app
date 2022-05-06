import {TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                stlye={styles.textInput}
                placeholder={"Nhập bất cứ vào đây nè"}
                onTextChange={text => setQuery(text)}
                onEndEditing={() => {
                    alert(query);
                }}
            />
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        margin:7,
        marginBottom:15,
        padding:5,
        borderRadius:12
    },
    textInput: {
        backgroundColor:"white",
    }

});
export default SearchBar;