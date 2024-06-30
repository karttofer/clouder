/**
 * Button Default Primary
 *
 * This is the default button style, please use it if you want to
 * create a new button, also... I think there is a problema with !important since
 * don't know why it is needed
 *
 */

// FIXME: There is a lot of style that are not being taked from the root theme
// TODO: Some styles are repeated so we need this to be fixed
// TODO: Check styles to see if they are well designed or working well
/**
  background: 'layout.saffron.saffron400', <- this one will works

  _css: {
    background: 'layout.saffron.saffron400', <  this another one will no work
    transition: 'background .3s',
    borderWidth: '2px',
    borderColor: 'transparent',
  },
 */
export const ButtonThemePrimary = {
  css: {
    background: '#ff6000',
    transition: 'background .3s',
    borderWidth: '2px',
    borderColor: 'transparent',
  },
  _hover: {
    background: '#F0C86A',
    color: '#000000',
    cursor: 'pointer',
  },
  _active: {
    background: '#b14605 !important',
    color: '#ffffff',
  },
  _focus: {
    borderColor: '#b14605',
  },
}

export const InputThemePrimary = (isDarkTheme) => ({
  cursor: 'text',
  color: isDarkTheme ? 'layout.white.white0' : 'layout.black.black0',
  borderColor: 'layout.black.black600',
  _placeholder: {
    color: isDarkTheme ? 'layout.white.white0' : 'layout.black.black0',
    opacity: 0.3,
  },
  transition: 'background .3s',
  borderWidth: '2px',
  _hover: {
    _placeholder: {
      color: isDarkTheme ? 'layout.white.white0' : 'layout.black.black0',
    },
    cursor: 'text',
  },
  _focusVisible: {
    borderColor: 'layout.orange.orange400',
    borderWidth: '2px',
  },
})

/**
 * Button Transaprent Bg
 */
export const ButtonTheme = {
  css: {
    background: 'transparent',
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
}

export const IconButtonTheme = (color, hoverColor, hoverBg) => ({
  color,
  variant: 'ghost',
  cursor: 'pointer',
  _hover: {
    background: hoverBg,
    color: hoverColor,
  },
  _active: {
    background: 'transparent',
  },
})

export const ButtonSecondaryTheme = {
  background: 'layout.saffron.saffron50',
  borderWidth: '2px',
  borderColor: 'transparent',
  transition: 'background .3s',
  _hover: {
    background: 'layout.saffron.saffron100',
  },
  _active: {
    background: 'layout.saffron.saffron200',
  },
  _focus: {
    borderColor: 'layout.saffron.saffron400',
  },
}

export const ButtonCancelTheme = {
  background: 'layout.darkRed.darkRed400',
  borderWidth: '2px',
  borderColor: 'transparent',
  transition: 'background .3s',
  color: 'layout.whjite.white0',
  _hover: {
    background: 'layout.darkRed.darkRed200',
  },
  _active: {
    background: 'layout.darkRed.darkRed100',
  },
  _focus: {
    borderColor: 'layout.orange.orange500',
  },
}

export const ButtonDisableTheme = {
  color: '#808080',
  background: '#e7e7e7',
  cursor: 'default',
  _hover: {
    background: '#e7e7e7',
    cursor: 'default',
  },
  _active: {
    background: '#e7e7e7 !important',
    cursor: 'default',
  },
}

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
    scrollbarColor: '#3b3b3b transparent',
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
  alignItems: 'center',
  whiteSpace: 'nowrap',
}

export const SelectTheme = {
  color: 'layout.white.white0',
  bg: 'transparent',
  _hover: 'transparent',
  _active: { bgColor: 'layout.black.black900' },
}

// Animations
export const centerAnim = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const topBottomAnim = {
  initial: {
    transform: 'translateY(0px)',
    opacity: 0,
  },
  animate: {
    transform: 'translateY(7px)',
    opacity: 1,
  },
}
