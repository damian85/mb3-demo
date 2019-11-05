import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DatePicker from 'react-native-datepicker';

import Card from '../components/Card';
import Input from '../components/Input';
import FlightsList from '../components/FlightsList';
import Colors from '../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';



const SearchFlightsScreen = props => {
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [result, setResult] = useState();
    const [searched, setSearched] = useState(false);
    const [notification, setNotification] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //const fetchFlights = () => {
    const fetchFlights = async () => {
        try {
            setIsLoading(true);
            setNotification('');
            let params = '?from=' + fromValue + '&to=' + toValue + '&date=' + dateValue;
            let url = 'https://7fbvuzi711.execute-api.us-east-1.amazonaws.com/Dev/getflights' + params;


            let response = await fetch(url);
            if (response.ok) {
                let resData = await response.json();
                //alert(JSON.stringify(resData,null,2));
                if ((resData).length == 0) {
                    setIsLoading(false);
                    setResult('');
                    setSearched(false);
                    setNotification('No flights available in the selected date!');
                } else {
                    setIsLoading(false);
                    setNotification('');
                    setSearched(true);
                    setResult(resData);
                }

            } else {
                setResult('No flights available for the selected dates');
            }
            //throw new Error('No results!');
            //console.log(resData);
            //return resData;
        } catch (err) {
            console.error(err);
        }

        /*fetch(
            'https://7fbvuzi711.execute-api.us-east-1.amazonaws.com/Dev/getflights?from=EZE&to=MAD&date=2019-11-25'
        )
            .then(res => res.json())
            .then(json => setResult(json));*/
    };

    const fromInputHandler = inputText => {
        setFromValue(inputText.replace(/([0-9])/g, '')); //replace numeric value
    };

    const toInputHandler = inputText => {
        setToValue(inputText.replace(/([0-9])/g, '')); //replace numeric value
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={styles.screen}>
            <ScrollView style={styles.cardContainer}>
                <Card style={styles.inputContainer}>
                    <Text style={styles.cardText}>Find your next flight!</Text>
                    <View style={styles.inputLine}>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={fromInputHandler}
                            placeholder='From'
                            value={fromValue}
                        />
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={toInputHandler}
                            placeholder='To'
                            value={toValue}
                        />
                        <DatePicker
                            style={{
                                width: 120,
                                height: 30,
                                borderBottomColor: 'grey',
                                borderTopWidth: 0,
                                borderBottomWidth: 1,
                                marginVertical: 10
                            }}
                            date={dateValue}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2019-11-04"
                            maxDate="2030-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    borderWidth: 0
                                }
                            }}
                            onDateChange={(date) => { setDateValue(date) }}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Search" onPress={fetchFlights} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                </ScrollView>
                <Text style={styles.notiText}>{notification}</Text>
                <FlightsList flights={result} searched={searched} loading={isLoading}/>
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
        alignItems: 'center',
        margin: 30
    }, 
    cardContainer: {
        height: 10
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold'
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
    notiText:{
        color: 'red',
        fontWeight: 'bold'
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
