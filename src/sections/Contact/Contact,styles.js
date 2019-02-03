import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'contact-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 340 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  'contact-title': {
    'fontFamily': '"poppinsBold"',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'marginTop': [{ 'unit': 'px', 'value': 60 }]
  },
  'contact-details': {
    'fontFamily': '"poppinsMedium"',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'color': 'black'
  },
  'address-2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'contact-email': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'contact-social': {
    'width': [{ 'unit': 'px', 'value': 200 }]
  },
  'contact-social > img': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 24 }]
  }
});
