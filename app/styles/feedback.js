/**
 * Created by Andriy on 10.10.2016.
 */

import {StyleSheet, PixelRatio} from 'react-native';

var feedback = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    header: {
        flex: 1,
        minHeight: 180 / PixelRatio.get(),
        borderBottomWidth: 2 / PixelRatio.get(),
        borderColor: '#EEEEEE'
    },
    headerText: {
        color: '#fff',
        fontSize: 24 / PixelRatio.get(),
        alignSelf: 'center',
        marginTop: 13 / PixelRatio.get()
    },
    chat: {
        flex: 8,
        paddingLeft: 30 / PixelRatio.get(),
        paddingRight: 30 / PixelRatio.get(),
        paddingTop: 15 / PixelRatio.get()
    },
    footer: {
        flex: 2,
        minHeight: 220 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContent: {
        flexDirection: 'row',
        padding: 30 / PixelRatio.get(),
        alignItems: 'center'
    },
    btnSubmit: {
        backgroundColor: '#8E0404',
        width: 160 / PixelRatio.get(),
        marginRight: 10 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        marginLeft: 40 / PixelRatio.get(),
        marginBottom: 5 / PixelRatio.get(),
        alignSelf: 'flex-end',
        overflow: 'hidden',
        height: 60 / PixelRatio.get()
    },
    btnClaim: {
        width: 280 / PixelRatio.get(),
        alignSelf: 'center',
        height: 80 / PixelRatio.get(),
        borderRadius: 35 / PixelRatio.get(),
    },
    btnClaimText: {
        fontSize: 21 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    btnText: {
        fontSize: 27 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    hintContainer: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#EEEEEE',
        paddingBottom: 5 / PixelRatio.get()
    },
    hintText: {
        textAlign: 'center',
        fontSize: 24 / PixelRatio.get(),
        flex: 1
    },
    labelStyle:{
        fontSize: 24 / PixelRatio.get(),
        color: '#000000',
    },
    labelWrapStyle: {
        marginLeft: 10 / PixelRatio.get(),
        marginTop: 5 / PixelRatio.get()
    },
    progressWrap: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginLeft: 30 / PixelRatio.get(),
        marginRight: 30 / PixelRatio.get()
    },
    progress: {
        borderTopWidth: 2 / PixelRatio.get(),
        borderColor: '#80ADAD',
        paddingTop: 5 / PixelRatio.get(),
    },
    progressText: {
        fontSize: 16 / PixelRatio.get(),
        textAlign: 'right'
    },
    avatar: {
        flexDirection:'row',
        backgroundColor: '#fff',
        width: 30 / PixelRatio.get(),
        height: 30 / PixelRatio.get(),
        borderRadius: 15 / PixelRatio.get(),
        position: 'absolute',
        overflow: 'hidden'
    },
    avatarQuest: {
        bottom: -20 / PixelRatio.get(),
        left: -45 / PixelRatio.get()
    },
    avatarAnswer: {
        bottom: -20 / PixelRatio.get(),
        right: -45 / PixelRatio.get()
    },
    questWrap: {
        marginLeft: 45 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get()
    },
    questTailImg: {
        position: 'absolute',
        left: -25,
        bottom: 2,
        height: 20 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    quest: {
        fontSize: 27 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: '#8E0404',
        width: 420 / PixelRatio.get(),
        padding: 30 / PixelRatio.get(),
        borderRadius: 30 / PixelRatio.get(),
        overflow: 'hidden',
        color: '#FFFFFF'
    },
    answWrap: {
        marginRight: 10 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get(),
        alignSelf: 'flex-end'
    },
    answTailImg: {
        position: 'absolute',
        right: -25,
        bottom: 2,
        height: 20 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    answer: {
        fontSize: 20 / PixelRatio.get(),
        backgroundColor: '#EFEFEF',
        width: 250 / PixelRatio.get(),
        padding: 20 / PixelRatio.get(),
        borderRadius: 30 / PixelRatio.get(),
        color: '#000',
        overflow: 'hidden'
    },
    slider: {
        flex: 4,
        marginTop: 75 / PixelRatio.get(),
        height: 60 / PixelRatio.get()
    },
    sliderTrack: {
        height: 3 / PixelRatio.get()
    },
    sliderThumbStyle: {
        height: 65 / PixelRatio.get(),
        width: 65 / PixelRatio.get(),
        backgroundColor: '#8E0404',
        borderWidth: 7 / PixelRatio.get(),
        borderColor: '#fff',
        borderRadius: 35 / PixelRatio.get(),
        overflow: 'hidden'
    },
    sliderSelectedValue: {
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0 / PixelRatio.get(),
        top: -20 / PixelRatio.get()
    },
    sliderImg: {
        height: 100 / PixelRatio.get(),
        resizeMode: 'contain',
        alignItems: 'center'
    },
    sliderText: {
        color: '#fff',
        marginTop: 29 / PixelRatio.get(),
        fontSize: 27 / PixelRatio.get()
    },
    sliderValue: {
        fontSize: 27 / PixelRatio.get(),
        fontWeight: '600'
    },
    starsFooterWrap: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15 / PixelRatio.get(),
        alignItems: 'center'
    },
    sliderFooterWrap: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 25 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    offlineMode: {
        position: 'absolute',
        bottom: -5 / PixelRatio.get(),
        right: 0,
        left: 0
    }
});

export default feedback;
