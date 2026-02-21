import { TextInput, Pressable, ScrollView, Text, Image, Alert, StyleSheet, View, StatusBar, Platform } from "react-native";
import logo from '../assets/images/check.png'
import { colors } from "../constantes/color";

export default function RootLayout() {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.textContainer}>
          <Image source={logo} style={style.image} />
          <Text style={style.title}>Minhas tarefas</Text>
        </View>
        <View style={style.rowContainer}>
          <TextInput style={style.input} />
          <Pressable onPress={() => Alert.alert("Oie")} 
            style={({pressed})=> [style.button, {backgroundColor: pressed? "blue" : colors.primary}]}
            >
            <Text style={style.buttonText}>+</Text>
          </Pressable >
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
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
