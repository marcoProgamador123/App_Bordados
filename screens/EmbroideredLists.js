import React,{Component} from "react";
import { View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";
import db from "../config"
import EmbroideredCard from "./EmbroideredCard";

export default class EmbroideryList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          embroiderys: [],
        };
      }
    
      //Coletando os dados na montagem do componente
    componentDidMount = async () => {
        this.getEmbroidered();
    };

    //função para coletar 10 transações no banco de dados
    getEmbroidered = () => {
        let embroiderys = []
        var tipo = this.props.navigation.getParam("tipo")
        console.log(tipo)
      db.collection("bordados")
            .where("tipo_bordado","==",tipo)
            .get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    embroiderys.push(doc.data())
                });
                this.setState({
                  embroiderys:embroiderys
                })
            });
            
    };

      renderItem = ({ item: embroidered }) => {
        return <EmbroideredCard embroidered={embroidered} navigation={this.props.navigation} />;
      };
    
      keyExtractor = (item, index) => index.toString();
    
      render() {
        return (
          <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
    
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>
                  App de Bordados
              </Text>
            </View>

           
             {
              !this.state.embroiderys[0]
                ?
                (<View style={styles.noStories}>
                  <Text style={styles.noStoriesText}> sem bordados</Text>
                </View>)
    
                :
                (<View style={styles.cardContainer}>
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.embroiderys}
                    renderItem={this.renderItem}
                  />
                </View>)
            }
    
          </View>
        )
      }
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2496b5"
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
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
      },
      appTitleText: {
        flex: 0.85,
        fontWeight:"bold",
        color: "white",
        fontSize: RFValue(35),
        color:"#3c4345"
    
      },
      appTitleTextLight: {
        color: "black",
        fontSize: RFValue(28),
    
      },
      cardContainer: {
        flex: 0.85
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
    
      }

 })
  