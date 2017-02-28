/**
 * Created by Andriy on 09.10.2016.
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import alphabetList from '../styles/alphabetList';
import dismissKeyboard from 'dismissKeyboard';

class SectionHeader extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#F5F5F5', '#FFF']} style={alphabetList.headerView} start={[0.0, 0.9]}
                            end={[0.9, 1.0]}>
                <Text style={alphabetList.headerText}>{this.props.title}</Text>
            </LinearGradient>
        );
    }
}

class Cell extends React.Component {
    render() {
        return (
            <TouchableOpacity  onPress={() => {this.props.showModal(true, this.props.item); dismissKeyboard()}}>
                <View style={alphabetList.cellContainer}>
                    {
                        this.props.item.icon ? <Image source={{uri: this.props.item.icon.url}} style={alphabetList.avatarIcon} /> :
                        <Text style={alphabetList.avatar}>{this.props.item.fname.charAt(0)}</Text>
                    }
                    <Text style={alphabetList.name}>{this.props.item.fname}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export {
    SectionHeader,
    Cell
}



