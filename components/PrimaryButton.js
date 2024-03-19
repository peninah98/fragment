import { Text, View, StyleSheet, Pressable } from "react-native"
import Colors from "../util/colors"
export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elavation: 2,
  },

  buttonText: {
    textAlign: "center",
    color: "yellow",
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.75,
  },
})
