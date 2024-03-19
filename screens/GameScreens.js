import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title> Opponent's Game</Title>
      {/* <Text>GEUSS</Text> */}
      <View>
        <Text> Higher or Lower</Text>
      </View>
      {/* <Text>+ -</Text> */}
      {/* <Text>LOG ROUNDS</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
