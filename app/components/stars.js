/**
 * Created by Andriy on 11.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, PixelRatio} from 'react-native';
import feedback from '../styles/feedback';
import StarRating from 'react-native-star-rating';

export default class RatingStars extends React.Component {
    render() {
        return (
            <View style={feedback.starsFooterWrap}>
                <View style={{flex: 4}}>
                    <StarRating
                        starColor={'#FFB80F'}
                        emptyStar={'star'}
                        emptyStarColor={'#F1F1F1'}
                        disabled={false}
                        maxStars={5}
                        rating={this.props.starsRate}
                        starSize={70 / PixelRatio.get()}
                        selectedStar={(rating) => this.props.rateStars(rating)}
                    />
                </View>
            </View>

        );
    }
}
