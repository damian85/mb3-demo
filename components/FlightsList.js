import React from 'react';
import { ScrollView, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import FlightItem from './FlightItem';
import Colors from '../constants/colors';

const FlightsList = props => {

    if (props.loading) {
        return (
            <ScrollView style='styles.loader'><ActivityIndicator size="large" color={Colors.primary} /></ScrollView>
        );
    } else {
        return (
            <FlatList
                data={props.flights}
                keyExtractor={item => item.id}
                renderItem={itemData =>
                    <FlightItem
                        id={itemData.item.id}
                        airline={itemData.item.airline}
                        date={itemData.item.date}
                        from={itemData.item.from}
                        to={itemData.item.to}
                        departure={itemData.item.dep_time}
                        arrival={itemData.item.arr_time}
                        seats={itemData.item.seats}
                    />
                }
                /*ListHeaderComponent={
                    <FlightItem
                        id='Number'
                        airline='Airline'
                        date='Departure'
                        from='From'
                        to='To'
                        departure='Departure at'
                        arrival='Arrival at'
                        seats='Seats Available'
                    />
                }
                ListHeaderComponentStyle={{fontWeight: 'bold',}}*/
                //renderItem={itemData => <Text>{itemData.item.id} - {itemData.item.from} to {itemData.item.to} </Text>}
                style={{ ...styles.list, ...props.style }}
            />
        );
    }
};

const styles = StyleSheet.create({
    list: {
        padding: 10
    }, loader: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FlightsList;
