import { Text, View, StyleSheet } from "react-native";

export default function Journal() {
    
    return (
        <View style={styles.container}>
            <Text>Écran du journal</Text>
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