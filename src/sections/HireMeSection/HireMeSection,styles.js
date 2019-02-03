import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'HireMeSection-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  'HireMeSection-parallax': {
    'height': [{ 'unit': 'px', 'value': 400 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column'
  },
  'HireMeSection-parallax-title': {
    'color': 'white',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 38 }],
    'fontFamily': '"poppinsBold"'
  },
  'HireMeButton': {
    'width': [{ 'unit': 'px', 'value': 130 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'borderColor': 'white',
    'fontFamily': '"poppinsMedium"',
    'cursor': 'pointer',
    'borderWidth': '1px',
    'borderRadius': '6px',
    'borderStyle': 'solid',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'color': 'white'
  },
  'HireMeButton:hover': {
    'background': 'white',
    'color': 'black',
    'textDecoration': 'none'
  },
  'HireMeButton:active': {
    'background': 'white',
    'color': 'black',
    'textDecoration': 'none'
  }
});
