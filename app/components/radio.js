/**
 * Created by Andriy on 11.10.2016.
 */
import React, {Component} from 'react';
import {View, Text, PixelRatio} from 'react-native';
import {Button} from 'native-base';
import feedback from '../styles/feedback';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Radio extends React.Component {
    render() {
        return (
            <RadioForm formHorizontal={true} animation={true} style={{marginTop: 20}}>
                {this.props.radios.types.map((obj, i) => {
                    var onPress = (value, index) => {
                        this.props.setRadio(value, index)
                    }
                    return (
                        <RadioButton labelHorizontal={false} key={i} style={{}}>
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.props.valueIndex === i}
                                onPress={onPress}
                                buttonInnerColor={'#FFCA4B'}
                                buttonOuterColor={this.props.valueIndex === i ? '#726649' : '#727376'}
                                buttonSize={24 / PixelRatio.get()}
                                buttonOuterSize={40 / PixelRatio.get()}
                                buttonStyle={{borderWidth: 2 / PixelRatio.get()}}
                                buttonWrapStyle={{marginLeft: 15 / PixelRatio.get()}}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                onPress={onPress}
                                labelStyle={feedback.labelStyle}
                                labelWrapStyle={feedback.labelWrapStyle}
                            />
                        </RadioButton>
                    )
                })}
            </RadioForm>
        );
    }
}
