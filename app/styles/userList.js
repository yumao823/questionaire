/**
 * Created by Andriy on 07.10.2016.
 */
import {StyleSheet, PixelRatio} from 'react-native';

var userList = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'rgba(0,0,0,0)',
    },
    header: {
        flex: 1,
        minHeight: 120 / PixelRatio.get(),
    },
    users: {
        flex: 8
    },
    footer: {
        flex: 1,
        minHeight: 70 / PixelRatio.get()
    },
    footerGradient: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedbackWrap: {
        width: 80 / PixelRatio.get(),
        alignItems: 'center',
        marginRight: 20 / PixelRatio.get()
    },
    feedbackImg: {
        height: 35 / PixelRatio.get(),
        width: 50 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    feedbackTxt: {
        color: '#0D0D0D',
        fontSize: 16 / PixelRatio.get()
    },
    signOut: {
        width: 65 / PixelRatio.get(),
        alignItems: 'center',
        marginLeft: 20 / PixelRatio.get()
    },
    signOutImg: {
        height: 35 / PixelRatio.get(),
        width: 30 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    notFound: {
        textAlign: 'center',
        fontSize: 24 / PixelRatio.get()
    },
    nameInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20 / PixelRatio.get()
    },
    search: {
        borderWidth: 0,
        height: 51 / PixelRatio.get(),
        marginLeft: 10 / PixelRatio.get()
    }
});

export default userList;
