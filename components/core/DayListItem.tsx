import { View, Text, StyleSheet } from "react-native";

type Props = {
  day: number
}
export default function DayListItem({ day }: Props) {

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#f9ede3",

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 70,
  },
})