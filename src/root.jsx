// Dependencies
import React from 'react'
import ReactDom from 'react-dom/client'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

// Routes
import { AppRoutes } from './utils/router/routes.jsx'

//Style
import './assets/main.scss'

const { Button, Main, Divider, Popover } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Main,
    Divider,
    Popover,
  },
  colors: {
    button: {
      hover: '#f7fafc',
      active: '#1a202c',
      focus: '#1a202c',
    },
    layout: {
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
      saffron400: '#F4D58D',
      saffron300: '#F2CF7D',
      saffron200: '#F0C86A',
      saffron100: '#EEC158',
      saffron50: '#495B52',
      darkRed400: '#BF0603',
      darkRed300: '#B50603',
      darkRed200: '#A10502',
      darkRed100: '#8D0401',
      darkRed50: '#8D0401',
      darkRedSec400: '#8D0801',
      darkRedSec300: '#8D0801',
      darkRedSec200: '#8D0801',
      darkRedSec100: '#8D0801',
      darkRedSec50: '#7A0701',
      gray50: '#b3b2b2',
    },
  },
})

ReactDom.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <AppRoutes />
    </ChakraBaseProvider>
  </React.StrictMode>
)
