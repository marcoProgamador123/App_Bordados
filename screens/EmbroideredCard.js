import React,{Component} from "react";
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

  export default class EmbroideredCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          embroidered_id: this.props.embroidered.key,
          embroidered_data: this.props.embroidered.value,
        };
      }

      render(){
        let embroidered = this.props.embroidered
        return(
            <TouchableOpacity
          style={styles.container}
          // onPress={() =>
          //   this.props.navigation.navigate("RequestScreen", {
          //     embroidered: this.state.embroidered_data,
          //     embroidered_id: this.state.embroidered_id
          //   })
          // }
        >
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/soc_patche.png")}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              
            </View>
            <View style={styles.actionContainer}>
              <Text>
                {embroidered.id_bordado}
              </Text>
              <Text>
                {embroidered.tipo_bordado}
              </Text>
              <Text>
                {embroidered.valor}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        )
      }
    
  }
  const styles = StyleSheet.create({
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    cardContainerLight: {
      margin: RFValue(13),
  
      backgroundColor: "white",
      borderRadius: RFValue(20),
      shadowColor: "rgb(0, 0, 0)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      shadowOpacity: RFValue(0.5),
      shadowRadius: RFValue(5),
      elevation: RFValue(2)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    titleTextContainer: {
      flex: 0.8
    },
    iconContainer: {
      flex: 0.2
    },
    storyTitleText: {
      
      fontSize: RFValue(25),
      color: "white"
    },
    storyTitleTextLight: {
      
      fontSize: RFValue(25),
      color: "black"
    },
    storyAuthorText: {
      
      fontSize: RFValue(18),
      color: "white"
    },
    storyAuthorTextLight: {
      
      fontSize: RFValue(18),
      color: "black"
    },
    descriptionContainer: {
      marginTop: RFValue(5)
    },
    descriptionText: {
      
      fontSize: RFValue(13),
      color: "white"
    },
    descriptionTextLight: {
      
      fontSize: RFValue(13),
      color: "black"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },    
  });
  