import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
} from '@chakra-ui/react'

import { CustomHDotsIcon } from '../../assets/chakra/icons'

import { LeftMenuConverastionItemOptionsStyle } from '../../assets/chakra/appStyle'

const MenuLeftOptionsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <CustomHDotsIcon {...LeftMenuConverastionItemOptionsStyle} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
export default MenuLeftOptionsPopover
