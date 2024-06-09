// Dependencies
import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from '@chakra-ui/react'

const DropdownComponent = ({ jsxAction, menuItems, icon }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={icon}>
        {jsxAction}
      </MenuButton>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.icon && <Icon as={item.icon} mr={2} />}
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
export default DropdownComponent
