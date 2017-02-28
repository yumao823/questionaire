/**
 * Created by Andriy on 11.10.2016.
 */

import {StyleSheet, PixelRatio} from 'react-native';

var header = StyleSheet.create({
    headerGradient: {
        height: 72 / PixelRatio.get(),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 24 / PixelRatio.get(),
        alignSelf: 'center',
    },
    btnBack: {
        backgroundColor: '#0D0D0D',
        borderColor: '#8E0404',
        borderWidth: 3 / PixelRatio.get(),
        width: 240 / PixelRatio.get(),
        marginRight: 5 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        position: 'absolute',
        left: 20 / PixelRatio.get(),
        height: 36 / PixelRatio.get()
    },
    btnText: {
        fontSize: 21 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#FFFFFF',
    },
    btnExit: {
        backgroundColor: '#FFFFFF',
        width: 24 / PixelRatio.get(),
        marginRight: 5 / PixelRatio.get(),
        borderRadius: 12 / PixelRatio.get(),
        position: 'absolute',
        left: 20 / PixelRatio.get(),
        height: 24 / PixelRatio.get()
    },
    btnExitText: {
        fontSize: 21 / PixelRatio.get(),
        fontWeight: '800',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#ECEBD6',
    }
});

export default header;
