/**
 * Button Default Primary
 *
 * This is the default button style, please use it if you want to
 * create a new button, also... I think there is a problema with !important since
 * don't know why it is needed
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

export const InputThemePrimary = {
  css: {
    color: 'white',
    background: '#3b3b3b',
    transition: 'background .3s',
    borderWidth: '2px',
    borderColor: 'transparent',
  },
  _hover: {
    background: '#252525',
    cursor: 'pointer',
  },
  _active: {
    background: '#b14605 !important',
    color: '#ffffff',
  },
  _focusVisible: {
    borderColor: '#b14605',
    borderWidth: '2px',
  },
}

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
