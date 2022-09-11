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
      embroidered_id: this.props.embroidered.key,
      embroidered_data: this.props.embroidered.value,

    };
  }

  render() {
    let embroidered = this.props.embroidered
    
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
              Valor: {embroidered.valor}$$$
            </Text>
          </View>
          <TouchableOpacity style={styles.routeCards}

            onPress={() =>
              this.props.navigation.navigate("createOrders", { item_id: embroidered.id_bordado, item_valor: embroidered.valor })
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
    backgroundColor: "#01518a",
    borderRadius: RFValue(20),
    borderWidth: 5,
    borderColor: "black"
  },
  imageContainer: {
    margin: RFValue(5),
    borderRadius: RFValue(20),
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "#385c82"
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
    fontSize: RFValue(35),
    color: "#0dd4fc"
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
    backgroundColor: "#59b5eb",
    borderRadius: RFValue(35),
    borderColor: "black",
    padding: RFValue(20),
    flexDirection: "row",
    width: RFValue(190),
    height: RFValue(80),
    borderWidth: 5,
  },

  routeText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    //marginTop:35,
    //paddingLeft:30,
    alignSelf: "center",

  },

  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
});
