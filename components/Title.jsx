import { StyleSheet, Text } from "react-native"

export default function Title({ children }) {
  return <Text style={styles.title}> {children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    padding: 12,
    borderColor: "#ddb52f",
    borderWidth: 2,
    marginTop: 20,
  },
})
