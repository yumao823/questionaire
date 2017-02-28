/**
 * Created by Andriy on 07.10.2016.
 */

import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, Button} from 'native-base';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, Text, Image, ScrollView, PixelRatio} from 'react-native';
import Logo from '../components/logo';
import Footer from '../components/footer';
import thanksDining from '../styles/thanksDining';
import {fetchQuestions, setMode, showWarning, sendFeedbackFromCache, searchUsers, setGuid} from '../actions';
import {MessageBar, MessageBarManager} from'react-native-message-bar';
import CheckConnection from './checkConnection';

class ThanksDining extends React.Component {
    componentDidMount() {
        MessageBarManager.registerMessageBar(this.refs.alert);
        this.props.setGuid();
    }
    render() {
        if(this.props.showWarning) {
            MessageBarManager.showAlert({
                viewLeftOffset : 50 / PixelRatio.get(),
                viewRightOffset : 50 / PixelRatio.get(),
                viewBottomOffset : 70 / PixelRatio.get(),
                position: 'bottom',
                message: this.props.showWarning,
                alertType: 'error',
                messageStyle: {textAlign: 'center', color: '#fff', fontSize: 24 / PixelRatio.get()},
                stylesheetError: { backgroundColor : '#F66679', strokeColor : '#FF0000' },
                onHide: () => this.props.warning('')
            })
        }
        return (

            <Image source={require('../images/hawelibg.jpg')} style={thanksDining.backgroundImage}>
                   <View style={thanksDining.overlay}>

                <Button bordered textStyle={thanksDining.cancelBtnText} style={thanksDining.cancelBtn} onPress={() => {this.props.searchUsers(''); this.props.goToComponent('userList');}}>{'\u2190 Exit'}</Button>
                <View style={thanksDining.logoContainer}>
                    <Logo style={thanksDining.logo}/>
                    <View>
                        <Text style={thanksDining.thanksText}>Thanks for visiting</Text>
                        <Text style={thanksDining.thanksText}>{this.props.restaurant}</Text>
                    </View>
                </View>
                <View style={thanksDining.inputGroup}>
                    <View>
                        <Text style={thanksDining.offerText}>{"\n"}Please fill me in.{"\n"}It takes
                            about 20 seconds.{"\n"}{"\n"}</Text>
                        <Text style={thanksDining.offerText}>Your feedback{"\n"}is very valuable to us!</Text>
                    </View>
                    <View>
                        <CheckConnection changeMode={this.props.setMode} sendFeedbackFromCache={this.props.sendFeedbackFromCache}/>
                        <Button bordered textStyle={thanksDining.btnText} style={thanksDining.signIn}
                                onPress={()=> {
                                    this.props.getQuestions(this.props.restaurantId, this.props.online);
                                }}>
                            Tap here to start!
                        </Button>
                    </View>
                </View>
                <View style={thanksDining.footer}>
                    <Footer style={thanksDining.footerText}/>
                </View>
                <MessageBar ref="alert"/>
            </View>
            </Image>
        );
    }
}

const mapStateToProps = (state) => {
    const props = {
        restaurant: state.users.restaurant.name,
        restaurantId: state.users.restaurant.outletID,
        reward: state.users.restaurant.reward,
        selectedUser: state.modals.user,
        showWarning: state.alert.message,
        online: state.connection.online,
        formId: state.guid.value
    };

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: (restaurantId, online) => {
            dispatch(fetchQuestions(restaurantId, online))
        },
        setMode: (online) => {
            dispatch(setMode(online));
        },
        goToComponent: (key) => {
            dispatch(Actions[key])
        },
        warning: (message) => {
            dispatch(showWarning(message));
        },
        sendFeedbackFromCache: (online) => {
            dispatch(sendFeedbackFromCache(online));
        },
        searchUsers: (key) => {
            dispatch(searchUsers(key));
        },
        setGuid: () => {
            dispatch(setGuid());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThanksDining);
