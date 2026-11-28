import { Text, View, StyleSheet } from "react-native";

export default function Badges() {
    
    return (
        <View style={styles.container}>
            <Text>Écran des Badges</Text>
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