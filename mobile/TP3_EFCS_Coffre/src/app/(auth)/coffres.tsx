import { Text, View, StyleSheet } from "react-native";

export default function Coffres() {
    
    return (
        <View style={styles.container}>
            <Text>Écran des coffres.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});