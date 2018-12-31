import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'home-section': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 740 }],
    'only screen&&min-device-width  768p&&max-device-width  1024p': {
      'height': [{ 'unit': 'px', 'value': 720 }]
    },
    'only screen&&min-device-width  320p&&max-device-width  480p': {
      'height': [{ 'unit': 'px', 'value': 640 }]
    }
  }
});
