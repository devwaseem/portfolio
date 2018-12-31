import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif',
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'fontFace': {
    'fontFamily': '"poppinsRegular"',
    'src': 'url("./fonts/Poppins-Regular.otf")'
  },
  'fontFace': {
    'fontFamily': '"poppinsMedium"',
    'src': 'url("./fonts/Poppins-Medium.otf")'
  },
  'fontFace': {
    'fontFamily': '"poppinsBold"',
    'src': 'url("./fonts/Poppins-Bold.otf")'
  },
  'fontFace': {
    'fontFamily': '"poppinsExtraBold"',
    'src': 'url("./fonts/Poppins-ExtraBold.otf")'
  }
});
