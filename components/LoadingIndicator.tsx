import React from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const LoadingIndicator: React.FC = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.spinner, { transform: [{ rotate: spin }] }]}
      >
        <View style={[styles.arm, styles.arm1]} />
        <View style={[styles.arm, styles.arm2]} />
        <View style={[styles.arm, styles.arm3]} />
        <View style={[styles.arm, styles.arm4]} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  spinner: {
    width: 50,
    height: 50,
    position: "relative",
  },
  arm: {
    position: "absolute",
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  arm1: {
    top: 0,
    left: "50%",
    width: 6,
    height: 20,
    marginLeft: -3,
  },
  arm2: {
    top: "50%",
    right: 0,
    width: 20,
    height: 6,
    marginTop: -3,
  },
  arm3: {
    bottom: 0,
    left: "50%",
    width: 6,
    height: 20,
    marginLeft: -3,
  },
  arm4: {
    top: "50%",
    left: 0,
    width: 20,
    height: 6,
    marginTop: -3,
  },
});

export default LoadingIndicator;
