import React from 'react'
import {View, Text} from 'react-native'

export default class Row extends React.Component {
    
    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }

    render() {
        return (
            <View>
                <Text>{this.props.day.main.temp}°C</Text>
            </View>
        );
    }
}