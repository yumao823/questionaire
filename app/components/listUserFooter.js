/**
 * Created by Andriy on 11.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import userList from '../styles/userList';

export default class ListUserFooter extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#F5F5F5', '#FFF']} style={userList.footerGradient} start={[0.0, 0.9]} end={[0.9, 1.0]}>
                <TouchableOpacity onPress={() => this.props.goToComponent('main')} style={userList.signOut}>
                    <Image style={userList.signOutImg} source={require('../images/sing_out.png')}/>
                    <Text style={userList.feedbackTxt}>Sign Out</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}
