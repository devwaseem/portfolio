import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'footer-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'background': 'black',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'footer-text': {
    'color': 'white',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontFamily': '"poppinsMedium"'
  }
});
