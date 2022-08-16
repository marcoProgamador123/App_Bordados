import React,{Component} from "react";
import { Text,View,StyleSheet } from "react-native";

export default class OrdersScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Pedidos
                </Text>
            </View>
        )
    }
}
 const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30
    }

 })
  