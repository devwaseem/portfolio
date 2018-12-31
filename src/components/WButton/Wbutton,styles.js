import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'WButton': {
    'borderColor': 'black',
    'borderWidth': '1px',
    'borderRadius': '6px',
    'borderStyle': 'solid',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'WButton:hover': {
    'background': 'black',
    'color': 'white'
  },
  'WButton-text': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'fontFamily': '"poppinsMedium"',
    'userSelect': 'none'
  }
});
