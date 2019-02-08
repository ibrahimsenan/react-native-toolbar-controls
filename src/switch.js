import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    PanResponder,
    TouchableWithoutFeedback,
    ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';
import {viewWidth, viewHight, viewPortMax, viewPortMin} from "./styles/ViewPortResizableUnits";
export default class Switch extends Component {
    static propTypes = {
        onValueChange: PropTypes.func,
        disabled: PropTypes.bool,
        activeText: PropTypes.string,
        inActiveText: PropTypes.string,
        backgroundActive: PropTypes.string,
        backgroundInactive: PropTypes.string,
        value: PropTypes.bool,
        circleActiveColor: PropTypes.string,
        circleInActiveColor: PropTypes.string,
        circleSize: PropTypes.number,
        circleBorderColor: PropTypes.string,
        activeTextStyle: Text.propTypes.style,
        inactiveTextStyle: Text.propTypes.style,
        containerStyle: ViewPropTypes.style,
        barHeight: PropTypes.number,
        circleBorderWidth: PropTypes.number
    };

    static defaultProps = {
        value: false,
        onValueChange: () => null,
        disabled: false,
        activeText: 'On',
        inActiveText: 'Off',
        backgroundActive: 'green',
        backgroundInactive: 'red',
        circleActiveColor: 'white',
        circleInActiveColor: 'white',
        circleBorderColor: 'rgb(100, 100, 100)',
        circleSize: 3 *viewPortMax,
        inactiveTextStyle :{ left:- 3 },
        barHeight: null,
        circleBorderWidth: 1
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.value,
            transformSwitch: new Animated.Value(props.value ? 4.8 *viewPortMax / 2 : -4.2 *viewPortMax / 2),
            backgroundColor: new Animated.Value(props.value ? 75 : -75),
            circleColor: new Animated.Value(props.value ? 75 : -75)
        };

        this.handleSwitch = this.handleSwitch.bind(this);
        this.animateSwitch = this.animateSwitch.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { disabled } = this.props;
        if (nextProps.value === this.props.value) {
            return;
        }
        if (disabled) {
            return;
        }

        this.animateSwitch(nextProps.value, () => {
            this.setState({ value: nextProps.value });
        });
    }

    handleSwitch() {
        const { value } = this.state;
        const { onValueChange, disabled } = this.props;
        if (disabled) {
            return;
        }

        this.animateSwitch(!value, () => {
            this.setState({ value: !value }, () => onValueChange(this.state.value));
        });
    }

    animateSwitch(value, cb = () => { }) {
        Animated.parallel([
            Animated.spring(this.state.transformSwitch, {
                toValue: value ? 4.8 *viewPortMax / 2 : -4.2 *viewPortMax / 2
            }),
            Animated.timing(this.state.backgroundColor, {
                toValue: value ? 75 : -75,
                duration: 200
            }),
            Animated.timing(this.state.circleColor, {
                toValue: value ? 75 : -75,
                duration: 200
            })
        ]).start(cb);
    }

    render() {
        const {
            transformSwitch,
            backgroundColor,
            circleColor,
        } = this.state;

        const {
            backgroundActive,
            backgroundInactive,
            circleActiveColor,
            circleInActiveColor,
            activeText,
            inActiveText,
            circleSize,
            containerStyle,
            activeTextStyle,
            inactiveTextStyle,
            barHeight,
            circleBorderColor,
            circleBorderWidth
        } = this.props;

        const interpolatedColorAnimation = backgroundColor.interpolate({
            inputRange: [-75, 75],
            outputRange: [backgroundInactive, backgroundActive]
        });

        const interpolatedCircleColor = circleColor.interpolate({
            inputRange: [-75, 75],
            outputRange: [circleInActiveColor, circleActiveColor]
        });

        return (
            <TouchableWithoutFeedback
                onPress={this.handleSwitch}
            >
                <Animated.View
                    style={[
                        styles.container,
                        containerStyle,
                        { backgroundColor: interpolatedColorAnimation, width: 8.7 *viewPortMax, height: barHeight ? barHeight : circleSize, borderRadius: circleSize }
                    ]}
                >
                    <Animated.View
                        style={[
                            styles.animatedContainer,
                            { left: transformSwitch, width: 7.9 *viewPortMax, },
                        ]}
                    >
                        <Text style={[styles.text, styles.paddingRight, activeTextStyle]}>
                            {activeText}
                        </Text>
                        <Animated.View style={[styles.circle, { borderWidth: circleBorderWidth, borderColor: circleBorderColor, backgroundColor: interpolatedCircleColor, width: circleSize, height: circleSize, borderRadius: circleSize / 2 }]} />
                        <Text style={[styles.text, styles.paddingLeft, inactiveTextStyle]}>
                            {inActiveText}
                        </Text>
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 10 *viewPortMax,
        height: 10 *viewPortMax,
        borderRadius: 30,
        borderColor:'#e0e0e0',
        borderWidth:0.2*viewPortMax,
        backgroundColor: 'red',
        marginLeft:1 *viewPortMax,
    },
    animatedContainer: {
        flex: 1,
        width: 7.8 *viewPortMax,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 1.9 *viewPortMax,
        height: 1.9 *viewPortMax,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize:1.4 *viewPortMax,
        borderRadius: 20,
    },
    paddingRight: {
        paddingRight: 0.5 *viewPortMax
    },
    paddingLeft: {
        marginLeft: 0.5 *viewPortMax,
    }
});