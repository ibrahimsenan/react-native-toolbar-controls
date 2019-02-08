'use strict';

let React = require('react-native')
  , Dimensions = React.Dimensions
  , {width, height} = Dimensions.get('window');

let units = {
  viewWidth: width/100, viewHight: height/100
};

units.viewPortMin = Math.min(units.viewWidth, units.viewHight);
units.viewPortMax = Math.max(units.viewWidth, units.viewHight);

module.exports = units;