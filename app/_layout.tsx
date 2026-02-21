import {Button, ScrollView, Text, Image, Alert} from "react-native";
import logo from '../assets/images/check.png'

export default function RootLayout(){
  return (
    <ScrollView>      
      <Text>oi mundo!!</Text>      
      <Image source={logo} />
      <Text>Minhas tarefas</Text>
      <Button
        title="+"
        onPress={()=> Alert.alert("Oie")}
      />            
    </ScrollView>
  ) 
}
