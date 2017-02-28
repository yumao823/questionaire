/**
 * Created by Andriy on 21.10.2016.
 */
import React from 'react';
import {
    Text,
    View,
    PixelRatio
} from 'react-native';
import { withConnection, connectionShape } from 'react-native-connection-info/redux';

class CheckConnection extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.connection.isConnected != this.props.connection.isConnected;
    }

    componentDidUpdate() {
        this.props.changeMode(this.props.connection.isConnected);
        if(this.props.sendFeedbackFromCache) {
            this.props.sendFeedbackFromCache(this.props.connection.isConnected);
        }
    }
    render() {
        return (
            <View>
                <Text style={[{ color: '#FEB216', fontSize: 24 / PixelRatio.get(), margin: 10 / PixelRatio.get(), textAlign: 'center' }, this.props.customStyle]}>
                    {!this.props.connection.isConnected ? 'You are offline' : ''}
                </Text>
            </View>
        );
    }
}


CheckConnection.propTypes = {
    connection: connectionShape,
};

export default withConnection(CheckConnection);