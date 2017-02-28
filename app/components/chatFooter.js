/**
 * Created by Andriy on 11.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button} from 'native-base';
import feedback from '../styles/feedback';
import Radio from '../components/radio';
import RatingStars from '../components/stars';
import SliderComponent from '../components/slider';
import TextField from '../components/textField';

export default class ChatFooter extends React.Component {
    render() {
        const {
            question,
            radioIndex,
            setRadio,
            starsRate,
            rateStars,
            sliderRate,
            rateSlider,
            setComment,
            comment,
            sendFedbacks
        } = this.props;
        return (
            <View style={this.props.style}>
                <View style={feedback.hintContainer}>
                    <Text style={feedback.hintText}>{this.props.hintText}</Text>
                </View>
                <View style={feedback.footerContent}>

                    <View style={{flex: 4}}>{
                        function () {
                            if (question.type == 'server' || question.type == 'm') {
                                return (
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}
                                                keyboardShouldPersistTaps={true}>
                                        <Radio
                                            radios={question.options}
                                            valueIndex={radioIndex}
                                            setRadio={setRadio}
                                        >
                                        </Radio>
                                    </ScrollView>)
                            } else if (question.type == 's') {
                                return (
                                    <RatingStars
                                        starsRate={starsRate}
                                        rateStars={rateStars}
                                    />
                                )
                            } else if (question.type == 'nps' || question.type == 'n') {
                                return (
                                    <SliderComponent
                                        sliderRate={sliderRate}
                                        rateSlider={rateSlider}
                                    />
                                )
                            } else if (question.type == 't') {
                                return (
                                    <TextField comment={comment} setComment={setComment}/>
                                )
                              } else if (question.type == 'email') {
                                  return (
                                      <TextField comment={comment} setComment={setComment}/>
                                  )
                            } else if (question.type == 'last') {
                                return (<Button style={[feedback.btnClaim]}
                                                 textStyle={feedback.btnClaimText} onPress={() => {sendFedbacks()}}>{'Finish \u2192'}</Button>)
                            }
                        }()
                    }
                    </View>
                    {
                        question.type == 'last' ? null : (<View style={{flex: 1.5}}>
                            <Button style={feedback.btnSubmit}
                                    textStyle={feedback.btnText}
                                    onPress={this.props.submit}>{'Submit \u2192'}</Button>
                        </View>)
                    }
                </View>
            </View>
        );
    }
}
