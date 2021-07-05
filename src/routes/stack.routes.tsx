import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

const Stackroutes = createStackNavigator()

const AppRoutes: React.FC = () => (
    <Stackroutes.Navigator
        headerMode = 'none'
        screenOptions ={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <Stackroutes.Screen
            name='Welcome'
            component={Welcome}    
        />

        <Stackroutes.Screen
            name='UserIdentification'
            component={UserIdentification}    
        />

        <Stackroutes.Screen
            name='Confirmation'
            component={Confirmation}    
        />

        <Stackroutes.Screen
            name='PlantSelect'
            component={PlantSelect}    
        />

    </Stackroutes.Navigator>
)

export default AppRoutes