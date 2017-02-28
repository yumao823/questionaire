import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Main from './main';
import UserList from './userList';
import ThanksDining from './thanksDining';
import ThanksFeedback from './thanksFeedback';
import Chat from './chat';

const MainConponent = connect()(Main);
const UserListComponent = connect()(UserList);
const ThanksDiningComponent = connect()(ThanksDining);
const ThanksFeedbackComponent = connect()(ThanksFeedback);
const ChatComponent = connect()(Chat);

// --- Create it via Actions.create(), or it will be re-created for each render of your Router
const scenes = Actions.create(
    <Scene key="root">
        <Scene key="main" component={MainConponent} initial={true} hideNavBar={true} panHandlers={null}/>
        <Scene key="userList" component={UserListComponent} hideNavBar={true} panHandlers={null}/>
        <Scene key="thanksDining" component={ThanksDiningComponent} hideNavBar={true} panHandlers={null}/>
        <Scene key="thanksFeedback" component={ThanksFeedbackComponent} hideNavBar={true} panHandlers={null}/>
        <Scene key="chat" component={ChatComponent} hideNavBar={true} panHandlers={null}/>
    </Scene>
);

const RouterWithRedux = connect()(Router);

export default class App extends React.Component {
    render() {
        return (
            <RouterWithRedux scenes={scenes}>
            </RouterWithRedux>
        );
    }
}