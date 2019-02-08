import {
    purple, whiteColor, viewportWidth, viewportHeight, tile, rightGreen, redLight, pureRed, oliveGreen, grayLightPure, darkPurple
    , darkGreen, grayLightMed, softGrayLight, gray, grayLight, darkBlue,
} from './colors';
import {viewWidth, viewHight, viewPortMax, viewPortMin} from "./ViewPortResizableUnits";
import {StyleSheet} from "react-native";
import {getPlatformValue} from "../utils";


export  const styles = StyleSheet.create({
    toolbar: {
        height: '12.3%',
        flexDirection: 'row',
        backgroundColor: tile,
        shadowOffset: {width: 10, height: 15},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    },
    title: {
        marginLeft: 16,
        color: 'red'
    },
    images: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 1 * viewPortMax,
        resizeMode: 'center',
        width: '16%', height: '65%'
    },
    pageHeaderTitle: {
        textAlign: 'center',
        color: purple,
        fontSize: 1.6 * viewPortMax,
        fontWeight: '500',

    },
    pageHeaderNumber: {
        color: '#fff',
        fontSize: 2.3 * viewPortMax,
        fontWeight: '500',
        textAlign: 'center',
    },
    containerImage: {
        width: window.width,
        height: window.height,
        resizeMode: getPlatformValue('android', 'cover', 'contain'),
        paddingTop: getPlatformValue('android', 5, 22),
    },
    containerView: {
        flex: 1,
        paddingTop: getPlatformValue('android', 5, 22),
        backgroundColor: '#fff',
    },
    toolbarRightSwitch:
        {
            paddingRight: '2%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
        },
    switchTitleStyle:
        {
            marginLeft: 16,
            color: purple,
            marginRight: 20,
            fontSize: 2 * viewPortMax,
            fontWeight: '500',
            // flex:1,
        },
    iconsContainer: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    toolbarLeftIcon:
        {
            flex: 1,
            justifyContent: 'center',
            marginLeft: 3 * viewHight,
            backgroundColor: 'transparent'
        },
    switchStyle:
        {
            height: '10%',
            width: '10%',
            backgroundColor: pureRed
        },
    toolbarCenterText: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: 40 * viewPortMax,

    },
    rightIcon: {
        marginLeft: 10,
        position: 'relative',
        top: 6,
        opacity: .8,
        backgroundColor: 'blue'
    }

});

export  const leftControlsStyles = StyleSheet.create({
    leftTextStyle: {
        marginLeft: 16,
        fontSize: 3.2 *viewPortMax,
        fontWeight:'500',
        color: whiteColor
    },

    leftTextContainer:{
        height: '85%',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
export  const centerControlsStyles = StyleSheet.create({
    centerTextStyle: {
        marginLeft: 16,
        fontSize: 3.2 *viewPortMax,
        fontWeight:'500',
        color: whiteColor
    },

    centerTextContainer:{
        height: '85%',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    segmentControlContainer:
        {
            height: '85%',
            width: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        },
    tabStyle:{
        backgroundColor:darkBlue,
        borderWidth: 1,
        borderColor:tile,
    },
    activeTabStyle:
        {
            backgroundColor:whiteColor
        },
    tabTextStyle:
        {
            fontFamily: 'AvenirNext-Medium', // backgroundColor:tile,
            textAlign: 'center', fontWeight: '500',
            fontSize: 1.4 * viewPortMax,color:whiteColor
        },
    activeTabTextStyle:
        {
            fontFamily: 'AvenirNext-Medium', // backgroundColor:tile,
            textAlign: 'center', fontWeight: '500',
            fontSize: 1.4 * viewPortMax, color:purple
        },


});
export  const rightControlsStyles = StyleSheet.create({
    rightTextStyle: {
        marginLeft: 16,
        fontSize: 3.2 *viewPortMax,
        fontWeight:'500',
        color: whiteColor
    },

    rightTextContainer:{
        height: '85%',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

});