import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Portal,
  Button,
  Stack,
} from '@chakra-ui/react'

import {
  CustomHDotsIcon,
  CustomPencilIcon,
  CustomTrashIcon,
} from '../../assets/chakra/icons'

import { IconButtonTheme } from '../../assets/chakra/appStyle.js'

const MenuLeftOptionsPopover = () => {
  return (
    <Popover >
      <PopoverTrigger>
        <Button
          variant="ghost"
          {...IconButtonTheme('button.icon.inner', 'button.icon.hover')}
        >
          <CustomHDotsIcon />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent maxWidth="236px">
          <PopoverArrow bg="white" />
          <PopoverBody>
            <Stack direction="column" spacing={4}>
              <Button
                rightIcon={<CustomPencilIcon />}
                colorScheme="teal"
                variant="solid"
                {...IconButtonTheme(
                  'button.icon.innerSecondary',
                  'button.icon.hoverSecondary',
                  'button.icon.hoverSecondaryBg'
                )}
                justifyContent="space-between"
              >
                Rename
              </Button>
              <Button
                rightIcon={<CustomTrashIcon />}
                colorScheme="teal"
                variant="outline"
                justifyContent="space-between"
                {...IconButtonTheme(
                  'button.icon.innerSecondary',
                  'button.icon.hoverSecondary',
                  'button.icon.hoverSecondaryBg'
                )}
              >
                Delete Conversation
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default MenuLeftOptionsPopover
