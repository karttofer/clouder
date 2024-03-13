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


const MenuLeftOptionsPopover = ({reference}) => {
  return (
    <Popover >
      <PopoverTrigger>
      <Button>
      <CustomHDotsIcon {...LeftMenuConverastionItemOptionsStyle} />
      </Button>
      </PopoverTrigger>
      <Portal >
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme="blue">Button</Button>
          </PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default MenuLeftOptionsPopover
