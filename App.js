import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>𝑨𝒘𝒊𝒓𝒖𝒕 𝑨𝒓𝒊𝒚𝒂𝒑𝒐𝒓𝒏 𝑫𝑩𝑻.𝟏𝟎𝟐</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
