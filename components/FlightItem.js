import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Flight from '../models/flight';

const FlightItem = props => {
    //let fitem = new Flight(props.flight.id,props.flight.from,props.flight.to,props.flight.date,props.flight.airline,props.dep_time,props.flight.arr_time,props.seats);
    return (
        <View style={styles.item}><Text style={styles.text}>{props.id}</Text><Text style={styles.text}>{props.airline}</Text><Text style={styles.text}>{props.from}</Text><Text style={styles.text}>{props.to}</Text><Text style={styles.text}>{props.departure}</Text><Text style={styles.text}>{props.arrival}</Text></View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth:1,
        borderRadius:10
    },
    text: {
        padding: 10
    }
});

export default FlightItem;