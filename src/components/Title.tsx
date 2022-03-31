import { StyleSheet, Text, View } from "react-native";

type titleProps = {
  title: string;
};

export function Title({ title }: titleProps) {
  return (
    <View>
      <Text style={styles.titulo}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    margin: 10,
    textAlign: "center",
  },
});
