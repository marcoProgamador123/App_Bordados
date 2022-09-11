import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/Orders";
import DetailsScreen from "./screens/DetailsScreen";
import CreateOrders from "./screens/CreateOrders";
import TabNavigator from "./navigations/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import EmbroideryList from "./screens/EmbroideredLists";


const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="tab" screenOptions={{headerShown:false}}>
          <Stack.Screen name="tab" component={TabNavigator} />
          <Stack.Screen name="details" component={DetailsScreen} />
          <Stack.Screen  name="Orders" component={OrderScreen} />
          <Stack.Screen name="embroidered" component={EmbroideryList}/>
          <Stack.Screen name="createOrders" component={CreateOrders}/>
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}