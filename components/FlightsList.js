import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const FlightsList = props => {
  return (
    <FlatList
      data={props.flights}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <Text>
          {itemData.item.id} - {itemData.item.from} to {itemData.item.to}{' '}
        </Text>
      )}
    />
    /*<Text>{props.flights}</Text> */
  );
};

export default FlightsList;
