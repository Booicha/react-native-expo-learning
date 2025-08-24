import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CountScreen = () => {
  const [count, setCount] = useState(0); // กำหนดค่า count เริ่มต้น = 0

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>ค่าปัจจุบัน: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="increse" onPress={() => setCount(count + 1)} />
        <Button title="devalue" onPress={() => setCount(Math.max(0,count - 1))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default CountScreen;