import {Text, View, StyleSheet} from "react-native";
import OptionBox from "../../components/OptionBox";
import {HeaderHeightContext} from "react-native-screens/native-stack";
import {SafeAreaView} from "react-native";
import Constants from "expo-constants";

const MainTab = () => {
    const logo = process.env["LOGO_URL"];
    console.log("hi" + logo)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.optionBar}>
                <OptionBox title={"Đây"} src={logo}/>
                <OptionBox title={"Là"} src={logo}/>
                <OptionBox title={"Lan"} src={logo}/>
                <OptionBox title={"Trần ."} src={logo}/>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    optionBar: {
        flex: 0.2, flexDirection: "row",
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }

});
export default MainTab;