import { TextInput, Pressable, ScrollView, Text, Image, Alert, StyleSheet, View, StatusBar, Platform, FlatList } from "react-native";
import logo from '../assets/images/check.png'
import { colors } from "../constantes/color";
import  Task  from '../components/Task';

export default function RootLayout() {
  const tasks = [
    { id: 1, completed: true, text: "Fazer café" },
    { id: 2, completed: false, text: "Estudar react native" },
    { id: 3, completed: false, text: "Academia" }
  ]

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Image source={logo} style={styles} />
          <Text style={styles.title}>Minhas tarefas</Text>
        </View>
        <View style={styles.rowContainer}>
          <TextInput style={styles.input} />
          <Pressable onPress={() => Alert.alert("Oie")}
            style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "blue" : colors.primary }]}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable >
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({ item }) => <Task text={item.text} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: 600,
    color: colors.primary,
    marginLeft: 12,
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1
  },
  buttonText: { color: "white", fontSize: 20 },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  }
})
