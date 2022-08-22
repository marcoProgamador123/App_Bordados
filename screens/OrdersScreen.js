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
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class OrdersScreen extends Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
    }
    async addStory() {
        if (this.state.item && this.state.name && this.state.the_amount && this.state.whatsapp && this.state.description) {
            let storyData = {
                preview_image: this.state.previewImage,
                item: this.state.item,
                description: this.state.description,
                name: this.state.name,
                the_amount: this.state.the_amount,
                whatsapp: this.state.whatsapp,
                author: firebase.auth().currentUser.displayName,
                created_on: new Date(),
                author_uid: firebase.auth().currentUser.uid,
                likes: 0
            }
            await firebase
                .database()
                .ref("/posts/" + (Math.random().toString(36).slice(2)))
                .set(storyData)
                .then(function (snapshot) {

                })

            this.props.navigation.navigate("Feed");
        } else {
            Alert.alert(
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
                        onChangeText={name => this.setState({ name })}
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
                        onChangeText={the_amount => this.setState({ the_amount })}
                        placeholder={"Quantidade"}
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
                </View>
                <TouchableOpacity style={styles.routeCards}

                    onPress={() =>
                        this.props.navigation.navigate("orders",)
                    } >
                    <Text style={styles.routeText}>
                        Enviar Pedido
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d8fd1"
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
        margin: RFValue(35),
        marginLeft: RFValue(70),
        marginTop: RFValue(20),
        backgroundColor: "#4fb1c9",
        borderRadius: RFValue(35),
        borderColor: "black",
        padding: RFValue(20),
        flexDirection: "row",
        width: RFValue(200),
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
        flex: 1,
        top: RFValue(150)
    }
})
