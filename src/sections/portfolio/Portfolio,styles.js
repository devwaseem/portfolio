import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'portfolio-title': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'portfolio-components-container': {
    'overflow': 'hidden',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 160 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 160 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr',
    'gridTemplateRows': 'repeat(5,300px)',
    'gridGap': '26px',
    'only screen&&min-device-width  700p&&max-device-width  1200p': {
      'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
      'gridTemplateColumns': '1fr 1fr'
    },
    'only screen&&min-device-width  700p&&max-device-width  900p': {
      'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 80 }],
      'gridTemplateColumns': '1fr 1fr'
    },
    'only screen&&min-device-width  550p&&max-device-width  700p': {
      'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
      'gridTemplateColumns': '1fr'
    },
    'only screen&&min-device-width  320p&&max-device-width  480p': {
      'display': 'flex',
      'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
      'justifyContent': 'center',
      'alignItems': 'center',
      'flexDirection': 'column'
    }
  },
  'portfolio-components-container > div:nth-child(1)': {
    'gridColumn': '1/2',
    'gridRow': '1/2'
  },
  'portfolio-components-container > div:nth-child(2)': {
    'gridColumn': '2/4',
    'gridRow': '1/3'
  },
  'portfolio-components-container > div:nth-child(3)': {
    'gridColumn': '1/2',
    'gridRow': '2/3'
  },
  'portfolio-components-container > div:nth-child(4)': {
    'gridColumn': '1/3',
    'gridRow': '3/5'
  },
  'portfolio-components-container > div:nth-child(5)': {
    'gridColumn': '3/4',
    'gridRow': '3/4'
  },
  'portfolio-components-container > div:nth-child(6)': {
    'gridColumn': '3/4',
    'gridRow': '4/5'
  }
});
