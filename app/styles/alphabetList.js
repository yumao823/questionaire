/**
 * Created by Andriy on 09.10.2016.
 */

import {StyleSheet, PixelRatio} from 'react-native';

var alphabetList = StyleSheet.create({
    cellContainer: {
        flexDirection: 'row',
        height: 150 / PixelRatio.get(),
        alignItems: 'center',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#F5F5F5',
        backgroundColor: '#F5F5F5'
    },
    headerView: {
        height: 36 / PixelRatio.get(),
    },
    headerText: {
        color:'#434448',
        marginLeft: 15 / PixelRatio.get(),
        fontSize: 24 / PixelRatio.get(),
    },
    avatar: {
        flexDirection:'row',
        marginLeft: 15 / PixelRatio.get(),
        color: '#fff',
        fontSize: 60 / PixelRatio.get(),
        backgroundColor: '#434448',
        width: 100 / PixelRatio.get(),
        height: 100 / PixelRatio.get(),
        borderRadius: 50 / PixelRatio.get(),
        textAlign: 'center',
        paddingTop: 8 / PixelRatio.get(),
        overflow: 'hidden'
    },
    avatarIcon: {
        flexDirection:'row',
        marginLeft: 15 / PixelRatio.get(),
        width: 100 / PixelRatio.get(),
        height: 100 / PixelRatio.get(),
        borderRadius: 50 / PixelRatio.get(),
        paddingTop: 8 / PixelRatio.get(),
        overflow: 'hidden'
    },
    name: {
        marginLeft: 20 / PixelRatio.get(),
        fontSize: 24 / PixelRatio.get(),
        color: '#000'
    }
});

export default alphabetList;
