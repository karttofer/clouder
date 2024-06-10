// Dependencies
import React from 'react'
import {
  Avatar,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Portal,
  Button,
  Flex,
  Stack,
  Divider,
  Text,
} from '@chakra-ui/react'

// Icons
import {
  CustomGearIcon,
  CustomExistIcon,
} from '../../../assets/chakra/icons.js'

// Themes
import {
  IconButtonTheme,
  ButtonTheme,
} from '../../../assets/chakra/appStyle.js'

const MenuLeftAvatarProfile = ({ avatarImg }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button p={0} marginBlock={4} w="100%" height="60px" {...ButtonTheme}>
          <Flex
            w="100%"
            justify="flex-start"
            align="center"
            paddingLeft={3}
            paddingRight={3}
          >
            <Avatar src={avatarImg} paddingRight={2} />
            <Text color="white">Jhornan Colina</Text>
            <Spacer />
          </Flex>
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent maxWidth="236px">
          <PopoverArrow bg="white" />
          <PopoverBody>
            <Stack direction="column" spacing={4}>
              <Button
                rightIcon={<CustomGearIcon />}
                colorScheme="teal"
                variant="solid"
                {...IconButtonTheme(
                  'button.icon.innerSecondary',
                  'button.icon.hoverSecondary',
                  'button.icon.hoverSecondaryBg'
                )}
                justifyContent="space-between"
              >
                Settings
              </Button>
              <Divider />
              <Button
                rightIcon={<CustomExistIcon />}
                colorScheme="teal"
                variant="outline"
                justifyContent="space-between"
                {...IconButtonTheme(
                  'button.icon.innerSecondary',
                  'button.icon.hoverSecondary',
                  'button.icon.hoverSecondaryBg'
                )}
              >
                Sign Out
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
export default MenuLeftAvatarProfile
