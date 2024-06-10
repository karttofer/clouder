// Dependencies
import React from 'react'
import ReactDom from 'react-dom/client'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  FormControl,
} from '@chakra-ui/react'

// Routes
import { AppRoutes } from './utils/router/routes.jsx'

//Style
import './assets/main.scss'
import { Form } from 'react-router-dom'

const {
  Radio,
  Checkbox,
  Select,
  Menu,
  Button,
  Main,
  Divider,
  Popover,
  Avatar,
  Stack,
  Switch,
  Input,
} = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Switch,
    Stack,
    Select,
    Menu,
    Button,
    Main,
    Divider,
    Popover,
    Avatar,
    Checkbox,
    Radio,
    Input,
  },
  colors: {
    button: {
      icon: {
        inner: '#f7fafc5e',
        innerSecondary: '#444444',
        hover: '#ffffff',
        hoverSecondary: 'black',
        hoverSecondaryBg: '#ada6a6',
      },
      hover: '#f7fafc',
      active: '#1a202c',
      focus: '#1a202c',
    },
    text: {
      hint: '#a9a9a9',
    },
    layout: {
      yale: {
        yaleblue400: '#001427',
        yaleblue300: '#00203D',
        yaleblue200: '#002A52',
        yaleblue100: '#003566',
        yaleblue50: '#043e74',
        yaleblue25: '#003F7A',
        feldgaru400: '#52665D',
        feldgaru300: '#5B7168',
        feldgaru200: '#647D73',
        feldgaru100: '#6D887D',
        feldgaru50: '#708D81',
      },
      saffron: {
        saffron400: '#F4D58D',
        saffron300: '#F2CF7D',
        saffron200: '#F0C86A',
        saffron100: '#EEC158',
        saffron50: '#495B52',
      },
      darkRed: {
        darkRed400: '#BF0603',
        darkRed300: '#B50603',
        darkRed200: '#A10502',
        darkRed100: '#8D0401',
        sec: {
          darkRed400: '#8D0801',
          darkRed50: '#7A0701',
        },
      },
      black: {
        black900: '#101010',
        black800: '#1c1c1c',
      },
      white: {
        white0: '#ffffff',
        white5: '#ffffff17',
        white10: '#c5c5c517',
      },
    },
    primary: {
      white10: '#ffffffab',
    },
  },
  radii: {
    general: '5px',
  },
})

ReactDom.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <AppRoutes />
    </ChakraBaseProvider>
  </React.StrictMode>
)
