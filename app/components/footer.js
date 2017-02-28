/**
 * Created by Andriy on 06.10.2016.
 */

import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Footer extends React.Component {
    render(){
        return (
            <Text style={this.props.style}>Powered by Buzzer Feedback</Text>
        );
    }
}
