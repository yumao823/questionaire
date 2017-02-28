/**
 * Created by Andriy on 11.10.2016.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import feedback from '../styles/feedback';

class ProgressBar extends React.Component {
    render() {
        let progress = +this.props.progress;
        let freeSpace = 100 - this.props.progress;
        return (
            <View style={feedback.progressWrap}>
                <View style={[feedback.progress, {flex: progress}]}>
                    <Text style={feedback.progressText}>{this.props.progress + '%'}</Text>
                </View>
                <View style={{flex: freeSpace}}></View>
            </View>
        );
    }
}

export default ProgressBar;