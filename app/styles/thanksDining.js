import {StyleSheet, PixelRatio} from 'react-native';

var thanksDining = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        width: undefined,
        height: undefined,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
    },
    logoContainer: {
      marginTop: 50 / PixelRatio.get(),
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        resizeMode: 'contain',
        height: 180 / PixelRatio.get()
    },
    thanksText: {
        color: '#FFFFFF',
        fontSize: 45 / PixelRatio.get(),
        textAlign: 'center',
        width: 500 / PixelRatio.get(),
        marginTop: 20 / PixelRatio.get()
    },
    inputGroup: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    offerText: {
        color: '#FFFFFF',
        fontSize: 33 / PixelRatio.get(),
        textAlign: 'center',
        width: 500 / PixelRatio.get()
    },
    input: {
        width: 350 / PixelRatio.get(),
        height: 50 / PixelRatio.get(),
        backgroundColor: '#60575A',
        borderWidth: 0,
    },
    signIn: {
        width: 350 / PixelRatio.get(),
        height: 90 / PixelRatio.get(),
      //  marginTop: 10 / PixelRatio.get(),
        borderRadius: 18 / PixelRatio.get(),
        backgroundColor: '#8E0404',
        borderColor: '#000000',
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 27 / PixelRatio.get()
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    footerText: {
      color: '#EFEFEF',
      fontSize: 21 / PixelRatio.get(),
      marginBottom: 20 / PixelRatio.get(),
      fontWeight: '400'
    },
    cancel: {
        position: 'absolute',
        right: 20 / PixelRatio.get(),
        top: 0 / PixelRatio.get(),
        fontSize: 60 / PixelRatio.get(),
        color: '#60575A'
    },
    cancelBtnText: {
        color: '#FFFFFF',
        fontSize: 18 / PixelRatio.get()
    },
    cancelBtn: {
        width: 90 / PixelRatio.get(),
        height: 39 / PixelRatio.get(),
        marginTop: 10 / PixelRatio.get(),
        marginLeft: 10 / PixelRatio.get(),
        borderRadius: 21 / PixelRatio.get(),
        backgroundColor: '#000000',
        borderColor: '#000000',
    },
});

export default thanksDining;
