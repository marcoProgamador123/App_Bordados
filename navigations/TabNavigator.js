import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from "react-native-responsive-fontsize";

import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/Orders";
import CreateOrders from "../screens/CreateOrders";



const Tab = createMaterialBottomTabNavigator()

export default class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                labeled={false}
                barStyle={ styles.bottomTabStyle}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        var iconName
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline"
                        } else if (route.name === "Order") {
                            iconName = focused ? "receipt" : "receipt-outline"
                        }
                        return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />
                    }
                })}
                activeColor={"#e8dd46"}
                inactiveColor={"#aab0b3"}>
                <Tab.Screen
                    name="Home" component={HomeScreen}
                />

                <Tab.Screen
                    name="Order" component={OrderScreen}
                />
            </Tab.Navigator>
        )
    }
}
const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#344547",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});
