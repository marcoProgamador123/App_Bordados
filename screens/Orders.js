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
import { ListItem, Icon } from "react-native-elements"
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"
import { List } from "react-native-paper";



export default class OrderScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllOrders: [],
            lastVisbleOrder: null,
            searchText: ""
        };
    }
    //Coletando os dados na montagem do componente
    componentDidMount = async () => {
        this.getOrders();
    };

    //função para coletar 10 transações no banco de dados
    getOrders = () => {

        db.collection("orders")
            .limit(10)
            .get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    this.setState({
                        AllOrders: [...this.state.AllOrders, doc.data()],
                        lastVisbleOrder: doc
                    });
                });
            });
    };




    renderItem = ({ item, i }) => {
        //var date = item.date
        //     .toDate()
        //     .toString()
        //     .split(" ")
        //     .splice(0, 4)
        //     .join(" ");

        return (
            <View style={{ borderWidth: 1 }}>
                <ListItem.Content>
                <ListItem>
                    <ListItem.Title style={styles.title}>
                        {item.name}
                    </ListItem.Title>
                        <ListItem.Subtitle style={styles.subtitle}>
                            {`${item.description}`}
                        </ListItem.Subtitle>
                </ListItem>
                </ListItem.Content>
            </View>
        );
    };


    render() {
        const { searchText, AllOrders } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.textinputContainer}>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={text => this.setState({ searchText: text })}
                            placeholder={"Escreva aqui"}
                            placeholderTextColor={"#FFFFFF"}
                        />
                        <TouchableOpacity
                            style={styles.scanbutton}
                        >
                            <Text style={styles.scanbuttonText}>Pesquisa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    <FlatList
                        data={AllOrders}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    container: {
        flex: 1,
        backgroundColor: "#3a6bba",
        justifyContent: "center",
        alignItems: "center"
    },
    upperContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    textinputContainer: {
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "#9DFD24",
        borderColor: "#FFFFFF"
    },
    textinput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#5653D4",
        color: "#FFFFFF"
    },
    scanbutton: {
        width: 100,
        height: 50,
        backgroundColor: "#9DFD24",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    scanbuttonText: {
        fontSize: 24,
        color: "#0A0101",

    },
    lowerContainer: {
        flex: 0.8,
        backgroundColor: "#FFFFFF",
        alignItems: "stretch",
        width: 350,
        borderWidth: 3,
        borderRadius: 12


    },
    title: {
        fontSize: 20,

    },
    subtitle: {
        fontSize: 15,
    },
    lowerLeftContaiiner: {
        alignSelf: "flex-end",
        marginTop: -40
    },
    transactionContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    transactionText: {
        fontSize: 20,

    },
    date: {
        fontSize: 12,
        paddingTop: 5
    }
});

