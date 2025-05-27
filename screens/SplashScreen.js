import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Login");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/visteon-logo.png')}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFA500",
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
})