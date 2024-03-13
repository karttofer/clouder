import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys)

/**
 * Buttron
 */
export const IconButtonTheme = (color, hoverColor, hoverBg) => ({
  color,
  variant: 'ghost',
  cursor: 'pointer',
  _hover: {
    background: hoverBg,
    color:hoverColor,
  },
})

/**
 * Popover
 */
export const popoverPrimary = {
  // define the part you're going to style
  body: {
    bg: 'gray.800', // change the background of the body to gray.800
  },
  content: {
    padding: 3, // change the padding of the content
  },
}

/**
 * Single Sliderbar
 */
export const SliderBarPrimaryTheme = {
  css: {
    overflowX: 'hidden',
    scrollbarColor: '#003566 transparent',
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  },
}

/**
 * Specific Custom Style
 */
export const LeftMenuItemsTheme = () => ({
  align: 'center',
  color: 'white',
  marginLeft: 2,
  marginRight: 1,
  borderRadius: 3,
  paddingLeft: 2,
  paddingRight: 2,
  tabIndex: 0,
  css: {
    transition: 'background .3s',
    borderWidth: '2px',
    borderColor: 'transparent',
  },
  _hover: {
    background: 'layout.white.white5',
    cursor: 'pointer',
  },
  _active: {
    background: 'layout.white.white10',
  },
  _focus: {
    borderColor: 'layout.white.white10',
    background: 'layout.white.white5',
  },
})

export const LeftMenuItemTextTheme = {
  textAlign: 'left',
  w: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '200px',
  fontWeight: 500,
  display: 'flex',
  align: 'center',
}
