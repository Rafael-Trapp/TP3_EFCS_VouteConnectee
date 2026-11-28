import { router, Stack, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { AuthContexteProvider } from "../../contextes/contexteAuthentification";
import { useAuth } from "../../hooks/useAuth";

function MainLayout() {
  const {estAuthentifie} = useAuth();
  const segments = useSegments();

  useEffect(() => {

    if (estAuthentifie === undefined) return;

    const dansGroupAuth = segments[0] === "(auth)";

    if (!estAuthentifie && dansGroupAuth) {
      router.replace("/");
    }

  }, [estAuthentifie]);

  if (estAuthentifie === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Chargement de l'app...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerBackButtonDisplayMode: "minimal"}}>
      <Stack.Screen name="(auth)" options={{headerBackButtonDisplayMode: "minimal"}}></Stack.Screen>
      <Stack.Screen name="index" options={{title:"Connexion à votre compte"}}></Stack.Screen>
      <Stack.Screen name="creerCompte" options={{title:"Créer votre compte"}}></Stack.Screen>
    </Stack>
  );
} 

export default function RootLayout() {
  return (
    <AuthContexteProvider>
      <MainLayout/>
    </AuthContexteProvider>
  );
}