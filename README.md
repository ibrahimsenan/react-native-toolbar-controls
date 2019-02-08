# react-native-toolbar-controls
react native toolbar with controls components support android and IOS, you can pass the props and dataset you need to get the view as you want it. It works on diffrent devices screens from 4 inch mobile screens to 10 inch screens, the example on landscape screen


# ScreenShots

![Alt text](/screenshots/toolbar.gif?raw=true "react-native-toolbar-controls")

# Installation
```
npm install --save react-native-toolbar-controls
```

# Components
Reference components used in react-native-toolbar-controls:
- [SegmentControl](https://github.com/csath/react-native-segment-controller)
- [Switch](https://github.com/shahen94/react-native-switch)

# Usage
```js
import ToolBarControl from 'react-native-toolbar-controls';

          <View>
                        <ToolBarControl segmentControlDataSet={options}
                                 centerControl={"SegmentControl"}
                                 selectedOption={"Start"}
                                 onPressSegmentControl={(option, index)=>{ console.log(option, index)}}
                                 leftControl={"Icon"}
                                 rightControl={"Switch"}
                                 leftIconName={"menu"}
                                 switchActiveText={"TS"}
                                 switchInActiveText={"TM"}
                                 onSwitchValueChange={(value)=>{console.log(value)}}
                                 onPressRightIcon={()=>{ console.log("onPressRightIcon")}}
                                 onPressLeftIcon={()=>{ console.log("onPressLeftIcon")}}
                                 rightIconName={'menu'}
                                 rightText={"RIGHT"}
                                 centerText={this.state.password}/>
          </View>
 ```
 
# Toolbar Props
##### Left Control
| Prop name  |Type | Description |
| ------------- | ------------- | ------------- |
| leftControl  | string | keyname default is "Icon" ("Icon"/"Text") |
| leftIconName  | string | icon name default is "menu" |
| leftIconColor  | string | icon color default is "#fff" |
| onPressLeftIcon  | function | callback on press left Icon|
| leftText  | string | Text view default is "Left Text" |
| leftControlTextContainerStyle  | object styles| text container style |
| leftControlTextStyle  | object styles| text style |

##### Center Control
| Prop name  |Type | Description |
| ------------- | ------------- | ------------- |
| centerControl  | string | keyname default is "Icon" ("SegmentControl"/"Text") |
| centerText  | string | text view  default is "Center Text" |
| centerControlTextContainerStyle  | object styles| text container style |
| centerControlTextStyle  | object styles| text style |
| segmentControlDataSet  | array | array of items like [ "Start", "Stop", "Recover"] |
| segmentControlSelectedOption  | string | default value 'Start'|
| onPressSegmentControl  | function | callback for (option, index) on segment control change |
| segmentControlHeight  | number | default value 6*viewPortMax, resizable |
| segmentControlTabStyle  | object styles | segmentControl container style|
| segmentControlActiveTabStyle  | object styles |segmentControl active container style|
| segmentControlTabTextStyle  | object styles | segmentControl text style |
| segmentControlActiveTabTextStyle  | object styles | segmentControl active text style |
| segmentControlBorderRadius  | number | default value 6.4 for border radius|

##### Right Control
| Prop name  |Type | Description |
| ------------- | ------------- | ------------- |
| rightControl  | string | keyname default is "Switch" ("Switch"/"Text"/"Icon") |
| rightText  | string | text view  default is "Right Text" |
| rightControlTextContainerStyle  | object styles| text container style |
| rightControlTextStyle  | object styles| text style |
| rightIconName  | string | default icon name is "map" |
| rightIconColor  | string | default icon color is "purple" |
| onPressRightIcon  | function | callback on press left Icon |
| switchActiveText  | string | default icon name is "ON" |
| switchInActiveText  | string | default icon name is "OFF" |
| onSwitchValueChange  | function | callback on value change is boolean (True/False)|
| *toolbarHeight*  | string | height size set in percentage (%) of screen size and default value ('12.3%')|
 
 
 
 
 
 
