import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import SearchFlightsScreen from '../screens/SearchFlightsScreen';
import Colors from '../constants/colors';

const AppNavigator = createStackNavigator (
    {
        SearchFlights: SearchFlightsScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary 
        }
    }
); 


export default createAppContainer(AppNavigator);
