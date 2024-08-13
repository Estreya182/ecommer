import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {AuthScreen} from "../../screens/Auth";
import { screensName } from "../../../utils/screensName";
import { HomeStack } from "../stacks/HomeStack";
import { WishlistStack } from "../stacks/WishlistStack";
import { AccountStack } from "../stacks/AccountStack";



const Tab = createBottomTabNavigator();

export function TabNavigation (){
return (
    <Tab.Navigator>

        <Tab.Screen
        name= {screensName.home.root} // reutilizamos las constantes
        component={HomeStack} // cambiamos por cada uno de los stacks
        options={{title: "Inicio"}}
        />
        <Tab.Screen
        name= {screensName.wishlist.root}
        component={WishlistStack}
        options={{title: "Lista"}}
        />
        <Tab.Screen
        name= {screensName.account.root}
        component={AccountStack}
        options={{title: "Mi cuenta"}}
        />
        
    </Tab.Navigator>
)
}