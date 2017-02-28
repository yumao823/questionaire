/**
 * Created by Andriy on 10.10.2016.
 */


import {StyleSheet, PixelRatio} from 'react-native';

var modal = StyleSheet.create({
    modal: {
        height: 420 / PixelRatio.get(),
        width: 420 / PixelRatio.get()
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20 / PixelRatio.get(),
    },
    innerContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 420 / PixelRatio.get(),
        padding: 35 / PixelRatio.get(),
        borderRadius: 9 / PixelRatio.get(),
    },
    avatar: {
        flexDirection:'row',
        color: '#fff',
        fontSize: 48 / PixelRatio.get(),
        backgroundColor: '#434448',
        width: 100 / PixelRatio.get(),
        height: 100 / PixelRatio.get(),
        borderRadius: 50 / PixelRatio.get(),
        textAlign: 'center',
        paddingTop: 16 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get(),
        overflow: 'hidden'
    },
    avatarIcon: {
        flexDirection:'row',
        width: 120 / PixelRatio.get(),
        height: 120 / PixelRatio.get(),
        borderRadius: 60 / PixelRatio.get(),
        paddingTop: 16 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get(),
        overflow: 'hidden'
    },
    text: {
        color: '#000',
        fontSize: 20 / PixelRatio.get(),
        textAlign: 'center'
    },
    btnWrap: {
        flexDirection: 'row',
        marginTop: 20 / PixelRatio.get()
    },
    btnYes: {
        backgroundColor: '#8E0404',
        width: 100 / PixelRatio.get(),
        height: 40 / PixelRatio.get(),
        marginRight: 5 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
    },
    btnNo: {
        backgroundColor: '#434448',
        width: 100 / PixelRatio.get(),
        marginLeft: 5 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        height: 40 / PixelRatio.get(),
    },
    btnSubmitName: {
        backgroundColor: '#0ADAFF',
        width: 150 / PixelRatio.get(),
        marginLeft: 5 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        height: 40 / PixelRatio.get(),
    },
    btnContinue: {
        backgroundColor: '#0ADAFF',
        width: 150 / PixelRatio.get(),
        height: 40 / PixelRatio.get(),
        marginBottom: 15 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get()
    },
    btnText: {
        fontSize: 24 / PixelRatio.get(),
        backgroundColor: 'rgba(0,0,0,0)'
    }
});

export default modal;
