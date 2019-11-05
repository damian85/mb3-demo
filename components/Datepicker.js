import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = { date: "" }
    }

    render() {
        return (
            <DatePicker
                style={{
                    width: 120,
                    height: 30,
                    borderBottomColor: 'grey',
                    borderTopWidth: 0,
                    borderBottomWidth: 1,
                    marginVertical: 10
                }}
                date={this.state.date}
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
                        borderWidth:0
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
            />
        )
    }
}