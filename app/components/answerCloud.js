/**
 * Created by Andriy on 12.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';
import feedback from '../styles/feedback';

class AnswerCloud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {toValue: 1}
        ).start();
    }

    render() {
        return (
            (<Animated.View
                style={this.props.animate ? {
                    opacity: this.state.fadeAnim, // Binds directly
                    transform: [{
                        translateX: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                    }],
                } : null}>
                <View style={feedback.answWrap}>
                    <Text style={feedback.answer}>{this.props.message}</Text>
                    <Image source={require('../images/tailYellowClouds.png')}
                           style={feedback.answTailImg}/>
                    {this.props.withAvatar ? <Text style={[feedback.avatar, feedback.avatarAnswer]}></Text> : null}
                </View>
            </Animated.View>)
        );
    }
}

export default AnswerCloud;
