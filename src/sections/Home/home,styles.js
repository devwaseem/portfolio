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
  // .home-dec-left{
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(24deg) translate(-130px,130px);
    background: white;
    width: 400px;
    height: 150px;
}

.home-dec-right{
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(-10deg) translate(10px,150px);
    background: white;
    width: 1000px;
    height: 240px;
}
  'home-hello': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.3 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'color': 'white',
    'fontFamily': '"poppinsMedium"',
    'only screen&&min-device-width  320p&&max-device-width  480p': {
      'top': [{ 'unit': '%V', 'value': 0.36 }],
      'fontSize': [{ 'unit': 'px', 'value': 22 }],
      'marginLeft': [{ 'unit': 'px', 'value': 26 }]
    }
  },
  'home-title': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.36 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 48 }],
    'color': 'white',
    'fontFamily': '"poppinsBold"'
  },
  'home-social': {
    'position': 'absolute',
    'display': 'flex',
    'top': [{ 'unit': '%V', 'value': 0.48 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  'home-social > img': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'marginRight': [{ 'unit': 'px', 'value': 24 }]
  },
  'home-scroll': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.6 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'marginLeft': [{ 'unit': 'px', 'value': 60 }],
    'animationName': 'scrollIndicatorAnimation',
    'animationDuration': '3s',
    'animationIterationCount': 'infinite',
    'animationTimingFunction': 'ease-in-out'
  }
});
