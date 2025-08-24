import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import CountScreen from '../pages/CountScreen';
import FlexScreen from "../pages/flexScreen";
import LayoutScreen from "../pages/LayoutScreen";
import LoginScreen from "../pages/LoginScreen";

const Stack = createStackNavigator();

export default function  Navigation () {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name= "Profile" component={ProfileScreen}/>
        <Stack.Screen name= "Count" component={CountScreen}/>
        <Stack.Screen name="Flex" component={FlexScreen} />
        <Stack.Screen name="Layout" component={LayoutScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
}