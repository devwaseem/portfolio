import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'portfolioComponent-container': {
    'position': 'relative'
  },
  'portfolioComponent-image': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'objectFit': 'cover'
  },
  'portfolio-component-title': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'opacity': '0',
    'fontFamily': '"poppinsBold"'
  },
  'portfolio-component-show': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'opacity': '0',
    'fontFamily': '"poppinsMedium"',
    'userSelect': 'none',
    'cursor': 'pointer'
  },
  'portfolioComponent-overlays': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'upperOverlay': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 0.5 }],
    'background': '#F2F2F2'
  },
  'lowerOverlay': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 0.5 }],
    'background': '#F2F2F2'
  },
  'animationDefaults': {
    'animationDuration': '0.4s',
    'animationDirection': 'normal',
    'animationTimingFunction': 'ease-out',
    'animationFillMode': 'forwards'
  },
  'overlayAnimation-in': {
    'animationName': 'overlayKeyframeIn'
  },
  'overlayAnimation-out': {
    'animationName': 'overlayKeyframeOut'
  },
  'titleAnimation-in': {
    'animationDelay': '0.2s',
    'animationName': 'titleIn'
  },
  'titleAnimation-out': {
    'animationName': 'titleOut'
  },
  'showAnimation-in': {
    'animationDelay': '0.1s',
    'animationName': 'showIn'
  },
  'showAnimation-out': {
    'animationName': 'showOut'
  }
});
