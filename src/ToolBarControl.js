import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, ToastAndroid,
    Image, Alert, ViewPropTypes
} from 'react-native'

import {viewWidth, viewHight, viewPortMax, viewPortMin} from "./styles/ViewPortResizableUnits";
import {
    purple,
    whiteColor,
    viewportWidth,
    viewportHeight,
    tile,
    rightGreen,
    redLight,
    pureRed,
    oliveGreen,
    grayLightPure,
    darkPurple,
    darkGreen,
    grayLightMed,
    softGrayLight,
    gray,
    grayLight,
    darkBlue,
} from './styles';
import Switch from './switch'
import {getPlatformValue} from "./utils";
import {styles, centerControlsStyles, leftControlsStyles, rightControlsStyles} from "./styles/styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SegmentControl from './segmentcontrol'

const options = [
    "Start",
    "Stop",
    "Recover"
];
let valueIndex;
export default class ToolBarControl extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            color: whiteColor,
            selectedOption: this.props.selectedOption,
        };
    }

    static defaultProps = {
        segmentControlDataSet: options,
        leftIconName: 'map',
        leftControlTextContainerStyle: leftControlsStyles.leftTextContainer,
        leftControlTextStyle: leftControlsStyles.leftTextStyle,
        toolbarHeight: '12.3%',
        segmentControlHeight: 6 * viewPortMax,
        centerText: 'Center Text',
        leftText: 'Left Text',
        leftIconColor: darkBlue,
        rightIconColor: purple,
        rightIconName: 'map',
        inactiveTextStyle: {left: -3},
        barHeight: null,
        circleBorderWidth: 1,
        centerControl: 'SegmentControl',
        segmentControlTabStyle: centerControlsStyles.tabStyle,
        segmentControlActiveTabStyle: centerControlsStyles.activeTabStyle,
        segmentControlTabTextStyle: centerControlsStyles.tabTextStyle,
        segmentControlActiveTabTextStyle: centerControlsStyles.activeTabTextStyle,
        segmentControlBorderRadius: 6.4,
        centerControlTextContainerStyle: centerControlsStyles.centerTextContainer,
        centerControlTextStyle: centerControlsStyles.centerTextStyle,
        rightText: 'Right Text',
        rightControl: 'Switch',
        rightControlTextContainerStyle: rightControlsStyles.rightTextContainer,
        rightControlTextStyle: rightControlsStyles.rightTextStyle,
        switchActiveText: 'ON',
        switchInActiveText: 'OFF',
    };

    _reshapingArrayOptions(index) {
        const {segmentControlDataSet, onPressSegmentControl} = this.props;
        let selectedOption;
        for (let i = 0; i <= segmentControlDataSet.length; i++) {
            if (index === i) {
                valueIndex = i;
                selectedOption = segmentControlDataSet[i];
                this.setState({selectedOption: i});
                onPressSegmentControl(selectedOption, valueIndex);
                ToastAndroid.show('Selected Option is  ' + selectedOption, ToastAndroid.LONG);
            }
        }
    }

    renderChildrenLeft(keyName) {
        const {leftIconName, onPressLeftIcon, leftIconColor, leftText, leftControlTextContainerStyle, leftControlTextStyle} = this.props;
        let childrens = [];
        if (keyName === 'Icon') {
            childrens.push(
                <TouchableOpacity key="icon_left" onPress={onPressLeftIcon}>
                    <Icon color={whiteColor} size={5 * viewPortMax} name={leftIconName}
                          style={[styles.icon, {color: leftIconColor}]}/>
                </TouchableOpacity>
            );
        } else if (keyName === 'Text') {
            childrens.push(
                <View
                    style={leftControlTextContainerStyle}>
                    <Text style={leftControlTextStyle}>{leftText}</Text>
                </View>
            );
        }
        childrens.push(this.props.children);
        return childrens;
    }

    renderChildrenCenter(keyName) {
        const {
            segmentControlDataSet, segmentControlHeight, segmentControlActiveTabStyle, segmentControlTabStyle, segmentControlTabTextStyle,
            segmentControlBorderRadius, segmentControlActiveTabTextStyle, centerText, centerControlTextContainerStyle, centerControlTextStyle
        } = this.props;
        let childrens = [];
        for (let i = 0; i <= segmentControlDataSet.length; i++) {
            if (this.state.selectedOption === segmentControlDataSet[i]) {
                valueIndex = i;
            }
        }
        if (keyName === 'SegmentControl') {
            childrens.push(
                <View
                    style={centerControlsStyles.segmentControlContainer}>
                    <SegmentControl
                        values={segmentControlDataSet}
                        selectedIndex={valueIndex}
                        onTabPress={(options) => this._reshapingArrayOptions(options)}
                        height={segmentControlHeight}
                        tabStyle={segmentControlTabStyle}
                        activeTabStyle={segmentControlActiveTabStyle}
                        tabTextStyle={segmentControlTabTextStyle}
                        activeTabTextStyle={segmentControlActiveTabTextStyle}
                        borderRadius={segmentControlBorderRadius}
                    />
                </View>
            );
        } else if (keyName === 'Text') {
            childrens.push(
                <View
                    style={centerControlTextContainerStyle}>
                    <Text style={centerControlTextStyle}>{centerText}</Text>
                </View>
            );
        }
        childrens.push(this.props.children);
        return childrens;
    }

    renderChildrenRight(keyNameRight) {
        const {
            rightText, switchInActiveText, switchActiveText, onSwitchValueChange, onPressRightIcon, rightIconColor, rightIconName,
            rightControlTextContainerStyle, rightControlTextStyle
        } = this.props;
        let childrens = [];
        if (keyNameRight === 'Switch') {
            childrens.push(
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Switch
                        value={this.state.value}
                        onValueChange={(value) => onSwitchValueChange(value)}
                        disabled={false}
                        containerStyle={{paddingLeft: 2, paddingRight: 9,}}
                        activeText={switchActiveText}
                        inActiveText={switchInActiveText}
                        circleSize={4.1 * viewPortMax}
                        barHeight={3.8 * viewPortMax}
                        circleBorderWidth={2}
                        circleBorderColor={'transparent'}
                        backgroundActive={grayLight}
                        backgroundInactive={purple}
                        circleActiveColor={whiteColor}
                        circleInActiveColor={whiteColor}
                    />
                </View>
            );
        } else if (keyNameRight === 'Text') {
            childrens.push(
                <View
                    style={rightControlTextContainerStyle}>
                    <Text style={rightControlTextStyle}>{rightText}</Text>
                </View>
            );
        } else if (keyNameRight === 'Icon') {
            childrens.push(
                <TouchableOpacity key="icon_left" onPress={onPressRightIcon}>
                    <Icon color={whiteColor} size={5 * viewPortMax} name={rightIconName}
                          style={[styles.icon, {color: rightIconColor}]}/>
                </TouchableOpacity>
            );
        }
        childrens.push(this.props.children);
        return childrens;
    }

    render() {
        const {toolbarHeight, leftControl, centerControl, rightControl} = this.props;
        return (
            <View style={[styles.toolbar, {backgroundColor: tile, height: toolbarHeight}]}>
                <View style={styles.toolbarLeftIcon}>
                    {this.renderChildrenLeft(leftControl)}
                </View>
                <View style={styles.toolbarCenterText}>
                    {this.renderChildrenCenter(centerControl)}
                </View>
                <View style={styles.toolbarRightSwitch}>
                    {this.renderChildrenRight(rightControl)}
                </View>
            </View>
        )
    }
}

ToolBarControl.propTypes = {


    leftIconName: PropTypes.string,
    leftControl: PropTypes.string,
    leftText: PropTypes.string,
    leftIconColor: PropTypes.string,
    onPressLeftIcon: PropTypes.func,
    leftControlTextContainerStyle: PropTypes.style,
    leftControlTextStyle: PropTypes.style,

    centerControl: PropTypes.string,
    centerControlTextContainerStyle: PropTypes.style,
    centerControlTextStyle: PropTypes.style,
    centerText: PropTypes.string,
    segmentControlDataSet: PropTypes.array,
    selectedOption: PropTypes.string,
    segmentControlHeight: PropTypes.number,
    segmentControlTabStyle: PropTypes.style,
    segmentControlActiveTabStyle: PropTypes.style,
    segmentControlTabTextStyle: PropTypes.style,
    segmentControlActiveTabTextStyle: PropTypes.style,
    segmentControlBorderRadius: PropTypes.number,
    onPressSegmentControl: PropTypes.func,


    rightText: PropTypes.string,
    rightControl: PropTypes.string,
    rightControlTextContainerStyle: PropTypes.style,
    rightControlTextStyle: PropTypes.style,
    rightIconName: PropTypes.string,
    onPressRightIcon: PropTypes.func,
    switchActiveText: PropTypes.string,
    switchInActiveText: PropTypes.string,
    onSwitchValueChange: PropTypes.func,
    rightIconColor: PropTypes.string,

    toolbarHeight: PropTypes.string,
};
