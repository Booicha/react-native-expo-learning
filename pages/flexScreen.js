import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

const DUMMY_IMAGE_1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/960px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
const DUMMY_IMAGE_2 = 'https://cdn-7.motorsport.com/images/mgl/0ZR74Db0/s800/marc-marquez-ducati-team.jpg';
const DUMMY_IMAGE_3 = 'https://resizing.flixster.com/1AE4udFWD-GCkR4hlKN_hpqpvtY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24344191_i_h9_aa.jpg';

export default function FlexScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.profileContainer}>
        <Image source={{ uri: DUMMY_IMAGE_1 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_2 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_3 }} style={styles.profileImage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  profileContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginTop: 20,
  },
});