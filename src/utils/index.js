import {
  Platform
} from 'react-native';

/**
 * Combine style from props like: marginTop, left, right
 * @param propStyleKeys
 * @param props
 * @returns {{}}
 */
function getStyleFromProps(propStyleKeys = [], props = {}) {
  let style = {};
  propStyleKeys.map((propStyleKey) => {
    const propStyleValue = props[propStyleKey];
    if (propStyleValue !== undefined && propStyleValue !== null && propStyleValue !== false) {
      style = {
        ...style,
        [propStyleKey]: propStyleValue
      }
    }
    return propStyleKey;
  });
  if (props.style) {
    style = {
      ...style,
      ...props.style
    }
  }
  return style;
}

function getPlatformValue(os, value, valueDefault) {
  if (Platform.OS === os) return value;
  return valueDefault
}

export default {
    getStyleFromProps,
    getPlatformValue,
}
export {
  getStyleFromProps,
  getPlatformValue,
}