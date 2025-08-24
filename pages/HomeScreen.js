import { View, Text, Button} from "react-native"

export default function Homescreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
    <Button
      title="Go to details"
     onPress={() => navigation.navigate('Details')}
     />
     <Button
      title="Go to Profile"
     onPress={() => navigation.navigate('Profile')}
     />
    <Button
      title="Go to Count"
     onPress={() => navigation.navigate('Count')}
     />
     <Button
        title="Go to Count"
        onPress={() => navigation.navigate("Count")}
      />
      <Button
        title="Go to Flex"
        onPress={() => navigation.navigate("Flex")}
      />
      <Button
        title="Go to Layout"
        onPress={() => navigation.navigate("Layout")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}