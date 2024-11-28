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
  Link: {
    padding: 10,
    backgroundColor: lightTheme.accent,
    marginTop: 20,
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
  scrollContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "100%",
  },
  favoritesItem: {
    borderColor: lightTheme.textPrimary,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
    marginVertical: 5,
    color: lightTheme.textPrimary,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: lightTheme.accentSoft,
  },
  qrContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 75,
  },
  shoppingContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: lightTheme.background,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginVertical: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: lightTheme.background,
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: lightTheme.accent,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  scrollContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "100%",
  },
  favoritesItem: {
    borderColor: darkTheme.textPrimary,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
    marginVertical: 5,
    color: darkTheme.textPrimary,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: darkTheme.accentSoft,
  },
  qrContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
