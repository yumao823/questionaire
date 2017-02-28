/**
 * Created by Andriy on 12.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';
import feedback from '../styles/feedback';

class QuestionCloud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1
            }
        ).start();
    }

    render() {
        return (
            (<Animated.View
                style={this.props.animate ? {
                    opacity: this.state.fadeAnim,
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]
                        }),
                    }]
                }:null}>
                <View style={feedback.questWrap}>
                    <Text style={feedback.quest}>{this.props.message}</Text>
                    <Image source={require('../images/tailGrayClouds.png')}
                           style={feedback.questTailImg}/>
                    {this.props.withAvatar ? <Text style={[feedback.avatar, feedback.avatarQuest]}>😀</Text> : null}
                </View>
            </Animated.View>)
        );
    }
}

export default QuestionCloud;
