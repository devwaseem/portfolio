import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'navbar-default': {
    'background': 'transparent',
    'borderColor': 'transparent'
  },
  'navbar-brand': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'only screen&&min-device-width  320p&&max-device-width  480p': {
      'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }]
    }
  },
  'navbar-default navbar-nav>li>a': {
    'color': '#fff'
  },
  'navbar-default navbar-toggle': {
    'borderColor': 'transparent !important'
  },
  'navbar-default navbar-toggle icon-bar': {
    'backgroundColor': '#fff'
  },
  'navbar-default navbar-toggle:focus': {
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-toggle:hover': {
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-collapse': {
    'borderColor': 'transparent'
  },
  'navbar-default navbar-form': {
    'borderColor': 'transparent'
  },
  'container': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  }
});
