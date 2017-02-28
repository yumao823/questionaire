/**
 * Created by Andriy on 07.10.2016.
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import header from '../styles/header';
import {Button} from 'native-base';
import thanksDining from '../styles/thanksDining';

class Header extends React.Component {
    render() {
        let displayBtn =
            this.props.showBackBtn ?
                <Button style={header.btnBack} textStyle={header.btnText} onPress={() => this.props.toPreview()}>{'\u2190 Undo last response'}</Button> : null;

        let resetButton =
            this.props.scene ==  'chat' ?
            <Button style={header.btnExit} textStyle={header.btnExitText} onPress={() => {this.props.resetApp(); this.props.goToComponent('thanksDining');}}>X</Button> : null;
        return (
            <LinearGradient colors={['#0d0d0d', '#000000']} style={header.headerGradient} start={[0.0, 0.9]} end={[0.9, 1.0]}>
                {resetButton}
                {displayBtn}
                <Text style={header.headerText}>{this.props.headerText}</Text>
            </LinearGradient>
        );
    }
}

export default Header;
