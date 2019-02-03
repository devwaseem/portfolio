import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'About-Container': {
    'overflow': 'hidden',
    'display': 'flex',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'only screen&&min-device-width  320p&&max-device-width  480p': {
      'height': [{ 'unit': 'px', 'value': 700 }]
    }
  },
  'About-image-container': {
    'flex': '1.6',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'flex-start',
    'only screen&&min-device-width  768p&&max-device-width  1024p': {
      'display': 'none'
    }
  },
  'About-image': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': '%V', 'value': 0.8 }],
    'objectFit': 'cover'
  },
  'About-bio': {
    'flex': '3',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'paddingRight': [{ 'unit': 'px', 'value': 80 }]
  },
  'About-bio-role': {
    'fontFamily': '"poppinsRegular"',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#828282'
  },
  'About-bio-text': {
    'fontFamily': '"poppinsRegular"',
    'marginTop': [{ 'unit': 'px', 'value': 18 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#828282',
    'lineHeight': [{ 'unit': 'px', 'value': 1.6 }],
    'textAlign': 'justify'
  },
  'About-bio-text-bold': {
    'fontFamily': '"poppinsBold"'
  },
  'AboutDownloadButton': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 45 }]
  }
});
