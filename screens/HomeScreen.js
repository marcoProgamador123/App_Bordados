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

  goToLists = (tipo) => {
    this.props.navigation.navigate("embroidered", { tipo: tipo })
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>
            {` Seja \n Bem-Vindo`}
          </Text>
        </View>
        <View style={styles.appTextContainer}>
          <Text style={styles.text}>
            {` Com o que \n Vamos trabalhar hoje ?`}
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => this.goToLists("biriba")}
            style={styles.routeCards}
          > 
          
            <Text style={styles.routeText}>
              Biriba
            </Text>
            <Image
              source={require("../assets/biriba01.png")}
              style={styles.storyImage}
            />
            
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.goToLists("medalha")}
            style={styles.routeCards}
          >
             <Text style={styles.routeText}>
          Medalha
        </Text> 
            <Image
              source={require("../assets/medalha01.png")}
              style={styles.storyImage}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.goToLists("brasao")}
            style={styles.routeCards}
          > 
          <Text style={styles.routeText}>
              Brasão
          </Text>
            <Image
              source={require("../assets/brasao03.png")}
              style={styles.storyImage}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3065c7"
  },
  text: {
    flex: 0.69,
    color: "white",
    fontSize: RFValue(28),
    fontWeight: "bold"
  },
  appTextContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
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
    fontWeight: "bold"

  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),

  },
  cardContainer: {
    flex: 1,
    top: RFValue(100),
    flexDirection: "row",
    flexWrap: "wrap"

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
  routeCards: {
    marginLeft: RFValue(15),
    margin: RFValue(10),
    marginTop: RFValue(10),
    backgroundColor: "white",
    borderRadius: RFValue(35),
    borderColor: "black",
    padding: RFValue(20),
    flexDirection: "column",
    width: RFValue(150),
    height: RFValue(150),
    borderWidth: 5,
    justifyContent: "center",
    alignItems:"center"
  },
  routeText: {
    flex:0.4,
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  storyImage: {
    flex:0.8,
    resizeMode: "contain",
    width: "120%",
    alignSelf: "center",
    margin: RFValue(13),
    marginTop: RFValue(5),

  },
  cardText:{
    alignSelf:"flex-end",
    flex:0.2
  }
});