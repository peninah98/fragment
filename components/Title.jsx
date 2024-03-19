import { StyleSheet, Text } from "react-native"

export default function Title({ children }) {
  return <Text style={styles.title}> {children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 20,
  },
})
