import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import FlightsList from '../components/FlightsList';
import Colors from '../constants/colors';



const SearchFlightsScreen = props => {
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [result, setResult] = useState();

    const fetchFlights = async () => {
        try {
            let response = await fetch(
                'https://7fbvuzi711.execute-api.us-east-1.amazonaws.com/Dev/getflights?from=EZE&to=MAD&date=2019-11-25'
            );
            if (response.ok){
                let resData = await response.json();
                setResult(resData);
            }
            throw new Error('No results!');
            //console.log(resData);
            //return resData;
        } catch (err) {
            console.error(err);
        }
    };
   

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={styles.screen}>
                <FlightsList flights={result}/>
                <Card style={styles.inputContainer}>
                    <Text>Search your next flight!</Text>
                    <View style={styles.inputLine}>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize='none'
                            autoCorrect={false}
                            //keyboardType="number-pad"
                            // maxLength={2}
                            // onChangeText={numberInputHandler}
                            placeholder='From'
                            value={fromValue} 
                        />
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize='none'
                            autoCorrect={false}
                            //keyboardType="number-pad"
                            // maxLength={2}
                            // onChangeText={numberInputHandler}
                            placeholder='To'
                        //value={} 
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Search" onPress={() => { }} color={Colors.primary} /></View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

SearchFlightsScreen.navigationOptions = {
    headerTitle: 'Flight Search'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    inputLine: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    input: {
        width: 50,
        textAlign: 'center',
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    }
});

export default SearchFlightsScreen;
