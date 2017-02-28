/**
 * Created by Andriy on 13.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, PixelRatio} from 'react-native';
import {InputGroup, Input} from 'native-base';
import feedback from '../styles/feedback';
import inputThemes from '../styles/inputThemes';

export default class TextField extends React.Component {
    render() {
        return (
            <View style={feedback.starsFooterWrap}>
                <InputGroup borderType='underline' style={{flex: 1, borderWidth: 1 / PixelRatio.get(), borderColor: '#ccc'}} theme={inputThemes.mainInput}>
                    <Input placeholder='Please tap here to type' value={this.props.comment} onChangeText={(freeText) => {this.props.setComment(freeText)}}/>
                </InputGroup>
            </View>

        );
    }
}
