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
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 50,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginLeft: 7,
  },
  descriptionContainer: {
    backgroundColor: lightTheme.accent,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
    width: "70%",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: lightTheme.textPrimary,
  },
  descriptionText: {
    textAlign: "center",
    color: lightTheme.textPrimary,
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
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  descriptionContainer: {
    backgroundColor: darkTheme.accent,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
    width: "70%",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: darkTheme.textPrimary,
  },
  descriptionText: {
    textAlign: "center",
    color: darkTheme.textPrimary,
  },
});
