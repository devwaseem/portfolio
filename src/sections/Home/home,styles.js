import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'home-containter': {
    'position': 'relative',
    'overflow': 'hidden'
  },
  'home-bg': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'home-dec-left': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'rotate(24deg) translate(-130px,130px)',
    'background': 'white',
    'width': [{ 'unit': 'px', 'value': 400 }],
    'height': [{ 'unit': 'px', 'value': 150 }]
  },
  'home-dec-right': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'rotate(-10deg) translate(10px,150px)',
    'background': 'white',
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'height': [{ 'unit': 'px', 'value': 240 }]
  },
  'home-hello': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.3 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'color': 'white',
    'only screen&&min-device-width  320p&&max-device-width  480p': {
      'top': [{ 'unit': '%V', 'value': 0.4 }],
      'fontSize': [{ 'unit': 'px', 'value': 22 }]
    }
  },
  'home-title': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.36 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 48 }],
    'color': 'white'
  },
  'home-particles': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  }
});
