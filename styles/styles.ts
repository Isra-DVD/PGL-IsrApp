import { StyleSheet } from "react-native";

const lightTheme = {
  background: "#E0E0E0",
  textPrimary: "#222222",
  accent: "#FFD700",
  accentSoft: "#4ECDC4",
};

const darkTheme = {
  background: "#444444",
  textPrimary: "#EEEEEE",
  accent: "#FF6B6B",
  accentSoft: "#4ECDC4",
};

export const stylesLight = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: lightTheme.background,
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: lightTheme.textPrimary,
  },
  homeImage: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  homeLink: {
    padding: 10,
    backgroundColor: lightTheme.accent,
  },
});

export const stylesDark = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: darkTheme.background,
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: darkTheme.textPrimary,
  },
  homeImage: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  homeLink: {
    padding: 10,
    backgroundColor: darkTheme.accent,
  },
});
