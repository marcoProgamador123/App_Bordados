import React,{Component} from "react";
import { Text,View,StyleSheet } from "react-native";

export default class DetailsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Detalhes
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
  