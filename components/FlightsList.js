import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import FlightItem from './FlightItem';

const FlightsList = props => {

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
            style={{...styles.list,...props.style}}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        height: 20
    }
});

export default FlightsList;
