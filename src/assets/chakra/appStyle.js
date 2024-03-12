// Dependencies
import { defineStyle } from '@chakra-ui/react'

export const MenuButtonCustomStyle = (hasChildren) => ({
  transition: 'all 0.2s',
  border: 'none',
  background: 'none',
  _hover: {
    bg: hasChildren ? 'yellow.200' : 'transparent',
    textDecoration: hasChildren ? 'none' : 'underline',
  },
  _expanded: { bg: hasChildren ? 'yellow.100' : 'transparent' },
  _focus: { boxShadow: hasChildren ? 'yellow.50' : 'transparent' },
  _active: {
    background: 'yellow.300',
  },
})

export const ButtonFillCustomStyle = defineStyle({
  background: 'yellow.100',
  color: 'black',
  _hover: {
    background: 'yellow.200',
  },
  _active: {
    background: 'yellow.300',
  },
})

export const ButtonGhostCustomStyle = defineStyle({
  background: 'transparent',
  color: 'black',
  _hover: {
    color: 'yellow.300',
  },
  _active: {
    color: 'yellow.400',
  },
})

export const LeftMenuConversationStyle = {
  backgroundColor: 'layout.yaleblue200',
  color: 'white',
  marginLeft: 4,
  marginRight: 4,
  borderRadius: 5,
  css: {
    fontWeight: '100',
    background: 'transparent',
    borderWidth: '2px',
    borderColor: 'transparent',
  },
  _hover: {
    background: 'layout.yaleblue200',
  },
  _active: {
    background: 'layout.yaleblue300',
  },
  _focus: {
    borderColor: 'layout.yaleblue200',
  },
  _after: {
    content: '""',
    position: 'absolute',
    top: '0',
    right: '0px',
    bottom: '0px',
    left: '136px',
    // background: 'linear-gradient(270deg, #0000004f, transparent)',
    borderRadius: '5px',
  },
}

export const LeftMenuConverastionItemOptionsStyle = {
  zIndex: 1000,
  m: 1,
  borderRadius: 2,
  width: '10px',
  cursor: 'pointer',
  __css: {
    transition: 'all .5s',
    minWidth: '17px',
    padding: '1px',
  },
  _hover: {
    background: 'layout.yaleblue50',
    color: 'orange.400',
    transition: 'all .5s',
  },
}

export const LeftMenuConverastionHideMenuIconStyle = {
  m: 1,
  borderRadius: 2,
  width: '10px',
  cursor: 'pointer',
  __css: {
    transition: 'all .5s',
    minWidth: '17px',
    padding: '1px',
    color: 'white',
  },
  _hover: {
    background: 'layout.yaleblue50',
    color: 'orange.400',
    transition: 'all .5s',
  },
}

export const LeftMenuConversationHideIconStyle = {
  color: 'layout.gray50',
  cursor: 'pointer',
  transition: 'all .5s',
  _hover: {
    color: 'black',
  },
}
