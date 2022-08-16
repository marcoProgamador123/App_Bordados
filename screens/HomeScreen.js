import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import EmbroideredCard from "./EmbroideredCard";
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  
  goToLists=(tipo)=>{
    this.props.navigation.navigate("embroidered",{tipo:tipo})
  }

  render() {
    return (
     <View style={styles.container}>  
      
      <View style={styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>
        {` Seja \n Bem-Vindo`}
        </Text>
      </View>
      
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={()=>this.goToLists("biriba")}
        style={styles.routeCards}
      >
        <Text style={styles.routeText}>
          Biriba
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.goToLists("medalha")}
        style={styles.routeCards}
      >
        <Text style={styles.routeText}>
          Medalha
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.goToLists("brasao")}
        style={styles.routeCards2}
      >
        <Text style={styles.routeText}>
          Brasão
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.goToLists("gandola")}
        style={styles.routeCards2}
      >
        <Text style={styles.routeText}>
          Gandola
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0742a8"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.15,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitleText: {
    flex: 0.99,
    color: "white",
    fontSize: RFValue(35),
    fontWeight:"bold"

  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),

  },
  cardContainer: {
    flex:1,
    top:RFValue(140)
    
  },
  noStories: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  noStoriesTextLight: {
    fontSize: RFValue(40),

  },
  noStoriesText: {
    color: "white",
    fontSize: RFValue(40),

  },
  routeCards:{
    margin: RFValue(14),
    marginLeft: RFValue(15),
    margin:RFValue(10),
    marginTop:RFValue(10),
    backgroundColor: "white",
    borderRadius: RFValue(20),
    borderColor:"#2f345d",
    padding: RFValue(20),
    flexDirection: "row",
    width: RFValue(150),
    height: RFValue(150),
    borderWidth:6,
},
  routeCards2:{
    margin: RFValue(14),
    marginLeft: RFValue(190),
    margin:RFValue(-160),
    backgroundColor: "white",
    borderRadius: RFValue(20),
    borderColor:"#2f345d",
    padding: RFValue(20),
    flexDirection: "row",
    width: RFValue(150),
    height: RFValue(150),
    
},
  routeText:{
    fontWeight:"bold",
    fontSize:25,
    color:"black",
    //marginTop:35,
    //paddingLeft:30,
    alignSelf:"center",
    
  },
});