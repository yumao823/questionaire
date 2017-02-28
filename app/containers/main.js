import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {InputGroup, Input, Button} from 'native-base';
import {connect} from 'react-redux';
import {View, Text, PixelRatio, TouchableWithoutFeedback, Platform, BackAndroid} from 'react-native';
import Logo from '../components/logo';
import Footer from '../components/footer';
import mainStyles from '../styles/main';
import inputThemes from '../styles/inputThemes';
import {fetchUsers, showWarning, setMode, sendFeedbackFromCache} from '../actions';
import {MessageBar, MessageBarManager} from'react-native-message-bar';
import CheckConnection from './checkConnection';
import dismissKeyboard from 'dismissKeyboard';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Main extends React.Component {
    componentDidMount() {
        MessageBarManager.registerMessageBar(this.refs.alert);

        BackAndroid.addEventListener('hardwareBackPress', function() {
            return BackAndroid.exitApp();
        });
    }

    componentWillUnmount() {
        MessageBarManager.unregisterMessageBar();
    }

    render() {
        const {getAllUsers} = this.props;
        let restaurantId;
        if (this.props.showWarning) {
            MessageBarManager.showAlert({
                viewLeftOffset: 50 / PixelRatio.get(),
                viewRightOffset: 50 / PixelRatio.get(),
                viewBottomOffset: 70 / PixelRatio.get(),
                position: 'bottom',
                message: this.props.showWarning,
                alertType: 'error',
                messageStyle: {textAlign: 'center', color: '#fff', fontSize: 24 / PixelRatio.get()},
                stylesheetError: {backgroundColor: '#F66679', strokeColor: '#FF0000'},
                onHide: () => this.props.warning('')
            })
        }
        return (
            <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                <LinearGradient colors={['#000000', '#0d0d0d']} style={mainStyles.linearGradient}>
                    <View style={mainStyles.logoView}>
                        <Logo style={mainStyles.logo}/>
                        <Text style={mainStyles.reminderText}>The Restaurant ID is haweli</Text>
                    </View>
                    <View style={mainStyles.inputGroup}>
                        <CheckConnection changeMode={this.props.setMode}
                                         sendFeedbackFromCache={this.props.sendFeedbackFromCache}/>
                        <InputGroup borderType='regular' style={mainStyles.input} theme={inputThemes.mainInput}>
                            <Input placeholder='Restaurant ID' onChangeText={(RestaurantInput) => {
                                restaurantId = RestaurantInput
                            }}/>
                        </InputGroup>
                        <View>
                            <Button
                                onPress={() => {
                                    restaurantId ? this.props.getAllUsers(restaurantId, this.props.online) : null;
                                    dismissKeyboard()
                                }}
                                bordered textStyle={mainStyles.signInText} style={mainStyles.signIn}> Sign In </Button>
                        </View>
                        <Text style={mainStyles.versionText}>v1.5.2HW</Text>
                    </View>
                    {(Platform.OS === 'ios') ? <KeyboardSpacer/> : null}
                    <View style={mainStyles.footer}>
                        <Footer style={mainStyles.footerText}/>
                    </View>
                    <MessageBar ref="alert"/>
                </LinearGradient>
            </TouchableWithoutFeedback>

        );
    }
}

const mapStateToProps = (state) => {
    const props = {
        showWarning: state.alert.message,
        online: state.connection.online
    };

    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: (restaurantId, online) => {
            dispatch(fetchUsers(restaurantId, online));
        },
        warning: (message) => {
            dispatch(showWarning(message));
        },
        setMode: (online) => {
            dispatch(setMode(online));
        },
        sendFeedbackFromCache: (online) => {
            dispatch(sendFeedbackFromCache(online));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
