import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from "expo-router";

//https://docs.expo.dev/router/advanced/tabs/
export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="passport" options={{ title: "badges", tabBarIcon: () => <FontAwesome name="id-badge" size={24} color="black"/>}}></Tabs.Screen>
            <Tabs.Screen name="projects" options={{ title: "coffres", tabBarIcon: () => <FontAwesome6 name="vault" size={24} color="black"/> }}></Tabs.Screen>
            <Tabs.Screen name="finishedTravels" options={{ title: "journal", tabBarIcon: () => <SimpleLineIcons name="notebook" size={24} color="black"/>}}></Tabs.Screen>
        </Tabs>
    );
}