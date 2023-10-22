import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class EmbroideredCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let embroidered = this.props.embroidered
    //console.log(embroidered.valor)
    let images = {
       'brasao01': require("../assets/brasao01.png"),
       'brasao02': require("../assets/brasao02.png"),
       'brasao03': require("../assets/brasao03.png"),
       'brasao05': require("../assets/brasao05.png"),
       'biriba01': require("../assets/biriba01.png"),
       'biriba02': require("../assets/biriba02.png"),
       'biriba03': require("../assets/biriba03.png"),
       'medalha01': require("../assets/medalha01.png"),
       'medalha02': require("../assets/medalha02.png"),
       'medalha03': require("../assets/medalha03.png"),
       'medalha04': require("../assets/medalha04.png"),
       
     };
    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
           <Image
            source={images[embroidered.imagem_bordado]}
            style={styles.storyImage}
          ></Image> 

        </View>
        <View style={styles.titleTextContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.embroideredTypeText}>
              {embroidered.tipo_bordado}
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.embroideredIdText}>
              ID: {embroidered.id_bordado}
            </Text>
            <Text style={styles.embroideredValorText}>
              Valor: {embroidered.valor}R$
            </Text>
          </View>
          <TouchableOpacity style={styles.routeCards}

            onPress={() =>
              this.props.navigation.navigate("createOrders", { embroidered:embroidered })
            } >
            <Text style={styles.routeText}>
              Fazer Pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#344547",
    borderRadius: RFValue(20),
    borderWidth: 5,
    borderColor: "black"
  },
  imageContainer: {
    margin: RFValue(5),
    borderRadius: RFValue(20),
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "#b4cacc"
  },
  storyImage: {
    resizeMode: "contain",
    width: "90%",
    alignSelf: "center",
    margin: RFValue(13),
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  titleTextContainer: {
    flex: 0.8,
    marginLeft: RFValue(10)
  },
  iconContainer: {
    flex: 0.2
  },
  embroideredTypeText: {
    fontSize: RFValue(33),
    color: "white",
  },

  embroideredIdText: {
    fontSize: RFValue(18),
    color: "white"
  },
  descriptionContainer: {
    marginTop: RFValue(5),
    marginLeft: RFValue(10)
  },
  embroideredValorText: {
    fontSize: RFValue(18),
    color: "white"
  },
  routeCards: {
    margin: RFValue(14),
    marginLeft: RFValue(115),
    marginTop: RFValue(-60),
    backgroundColor: "#f0c154",
    borderRadius: RFValue(35),
    borderColor: "black",
    padding: RFValue(20),
    flexDirection: "row",
    width: RFValue(169),
    height: RFValue(80),
    borderWidth: 5,
    alignSelf:"center"
  },

  routeText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    alignSelf: "center",

  },

  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
});
