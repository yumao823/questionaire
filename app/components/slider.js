/**
 * Created by Andriy on 11.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import feedback from '../styles/feedback';
import Slider from 'react-native-slider'

export default class SliderComponent extends React.Component {
    render() {
        return (
            <View style={feedback.sliderFooterWrap}>
                <View style={feedback.sliderSelectedValue}>
                    <Image source={require('../images/slider_thumb.png')} style={feedback.sliderImg}>
                        <Text style={feedback.sliderText}><Text style={feedback.sliderValue}>{this.props.sliderRate}</Text>/10</Text>
                    </Image>
                </View>
                <Slider
                    style={feedback.slider}
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                    value={this.props.sliderRate}
                    onValueChange={(value) => this.props.rateSlider(value)}
                    thumbStyle={feedback.sliderThumbStyle}
                    trackStyle={feedback.sliderTrack}
                    minimumTrackTintColor={'#898989'}
                    maximumTrackTintColor={'#B6B6B6'}
                />
            </View>
        );
    }
}
