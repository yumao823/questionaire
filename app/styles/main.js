/**
 * Created by Andriy on 06.10.2016.
 */
import {StyleSheet, PixelRatio} from 'react-native';

var mainStyles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    logoView: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        height: 180 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    inputGroup: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 350 / PixelRatio.get(),
        height: 50 / PixelRatio.get(),
        backgroundColor: '#EFEFEF',
        borderWidth: 0
    },
    signIn: {
        width: 350 / PixelRatio.get(),
        height: 60 / PixelRatio.get(),
        marginTop: 18 / PixelRatio.get(),
        borderRadius: 25 / PixelRatio.get(),
        borderColor: '#8E0404',
        paddingVertical: 0
    },
    signInText: {
        color: '#EFEFEF',
        fontSize: 24 / PixelRatio.get()
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    footerText: {
        color: '#3F3F3F',
        fontSize: 21 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get(),
        fontWeight: '400'
    },
    reminderText: {
        color: '#FFFFFF',
        fontSize: 23 / PixelRatio.get(),
        marginTop: 210 / PixelRatio.get(),
        width: 500 / PixelRatio.get(),
        justifyContent: 'center',
        textAlign: 'center',
    },
    versionText: {
        color: '#FFFFFF',
        fontSize: 12 / PixelRatio.get(),
        marginTop: 120 / PixelRatio.get(),
        justifyContent: 'center',
        textAlign: 'center',
    }
});

export default mainStyles;
