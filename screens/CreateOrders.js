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
    FlatList,
    TextInput,
    ScrollView,
    Alert
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";
import firebase from "firebase";

export default class CreateOrders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item_id:this.props.route.params.item_id,
            item_valor:this.props.route.params.item_valor,
            item_qtd:0,
            valor_total:0
        }
    }

    calculaTotal=()=>{
        var {item_valor,valor_total,item_qtd}=this.state
        valor_total=item_valor*item_qtd
        this.setState({
            valor_total:valor_total
        }) 
    }

    async addOrder() {
        if (this.state.item_id && this.state.name && this.state.whatsapp && this.state.description) {
            
      

            let orderData = {
                embroidered_id: this.state.item_id,
                description: this.state.description,
                name: this.state.name,
                whatsapp: this.state.whatsapp,
                total_pedido:this.state.item_qtd*this.state.item_valor,
                the_amount:this.state.item_qtd,
                status_pedido:"pedido",
                valor:this.state.item_valor,
                // author: firebase.auth().currentUser.displayName,
                created_on: new Date(),
                // author_uid: firebase.auth().currentUser.uid,
                // likes: 0
            }
            db
            .collection("orders")
            .add(orderData)

            db
            .collection("clientes")
            .add({
                clienteName:orderData.name,
                clienteWhatsapp:orderData.whatsapp,

            })
            this.props.navigation.navigate("Home");
        } else {
            alert(
                'Error',
                'Todos os campos são obrigatórios',
                [
                    { text: "OK", onPress: () => console.log('Ok Pressionado') }
                ],
                { cancelable: false }
            )
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ScrollView>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>
                        {` Tela de \n Pedidos`}
                    </Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput
                        style={[
                            styles.inputFont,
                            styles.inputFontExtra,
                            styles.inputTextBig
                        ]}
                        value={this.state.item_id}
                        placeholder={"Item"}
                        placeholderTextColor={"black"}
                    />

                    <TextInput
                        style={[
                            styles.inputFont,
                            styles.inputFontExtra,
                            styles.inputTextBig
                        ]}
                        onChangeText={name => this.setState({ name })}
                        placeholder={"Nome"}
                        multiline={true}
                        numberOfLines={20}
                        placeholderTextColor={"black"}
                    />

                    <TextInput
                        style={[
                            styles.inputFont,
                            styles.inputFontExtra,
                            styles.inputTextBig
                        ]}
                        onChangeText={(the_amount) =>{
                            this.setState({ item_qtd:the_amount})
                        }}
                        placeholder={"Quantidade"}
                        placeholderTextColor={"black"}
                    />
                    <TextInput
                        style={[
                            styles.inputFont,
                            styles.inputFontExtra,
                            styles.inputTextBig
                        ]}
                        onChangeText={whatsapp => this.setState({ whatsapp })}
                        placeholder={"Whatsapp"}
                        multiline={true}
                        numberOfLines={4}
                        placeholderTextColor={"black"}
                    />

                    <TextInput
                        style={[
                            styles.inputFont,
                            styles.inputFontExtra,
                            styles.inputTextBig
                        ]}
                        onChangeText={description => this.setState({ description })}
                        placeholder={"Descrição"}
                        multiline={true}
                        numberOfLines={4}
                        placeholderTextColor={"black"}
                    />

                    <Text style={[styles.routeText,{marginLeft:30}]}>
                        R${this.state.item_qtd*this.state.item_valor},00
                    </Text>

                </View>

                <TouchableOpacity style={styles.routeCards}

                    onPress={() =>
                        this.addOrder()
                    } >
                    <Text style={styles.routeText}>
                        Enviar Pedido
                    </Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d8fd1"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.15,
        flexDirection: "row"
    },
    appTitleTextContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    appTitleText: {
        flex: 0.99,
        color: "black",
        fontSize: RFValue(35),
        fontWeight: "bold"
    },
    cardContainer: {
        flex: 1,
        top: RFValue(140)

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
        margin: RFValue(55),
        marginLeft: RFValue(70),
        marginTop: RFValue(200),
        backgroundColor: "#4fb1c9",
        borderRadius: RFValue(35),
        borderColor: "black",
        padding: RFValue(20),
        width: RFValue(200),
        height: RFValue(80),
        borderWidth: 4,
    },
    routeText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
        //marginTop:35,
        //paddingLeft:30,
        

    },
    submitButton: {
        flex:0.1,
        marginTop: RFValue(20),
        alignItems: "center",
        justifyContent: "center",
      },
    inputFont: {
        height: RFValue(40),
        width: RFValue(320),
        marginLeft: RFValue(10),
        borderColor: "black",
        borderWidth: RFValue(3),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        fontSize: RFValue(15),
        color: "black",
        backgroundColor:"white"
    },
    inputFontExtra: {
        marginTop: RFValue(20)
    },
    inputTextBig: {
        textAlignVertical: "top",
        padding: RFValue(5)
    },
    inputs: {
        flex: 0.8,
        top: RFValue(150)
    },
    style1:{
        fontSize:20,
    }
})
