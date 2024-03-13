// Dependencies
import React, { useState } from 'react'
import {
  Container,
  Button,
  Stack,
  Divider,
  Text,
  Flex,
  Heading,
  Spacer,
  Box,
  Avatar,
  AvatarBadge,
  WrapItem,
  Wrap,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
} from '@chakra-ui/react'

import { CustomHDotsIcon } from '../../assets/chakra/icons'

// Pre-defined styles
import {
  LeftMenuConversationStyle,
  LeftMenuConverastionItemOptionsStyle,
  LeftMenuConversationHideIconStyle,
} from '../../assets/chakra/appStyle'

// Icon
import {
  CustomArchiveIcon,
  CustomPencilIcon,
  CustomCaretLeftIcon,
} from '../../assets/chakra/icons'

// Components
import MenuLeftOptionsPopover from './MenuLeftOptionsPopover.jsx'

import { AnimatePresence, motion } from 'framer-motion'

import img from '../../assets/images/dan_test_img.png'

const menuConfig = [
  {
    label: 'Yesterday',
    children: [
      {
        label: 'Homeaaaaaaaaaaaaaaa',
        color: '',
        icon: '',
        childElement: <MenuLeftOptionsPopover />,
      },
      {
        label: 'Chat',
        color: '',
        icon: '',
      },
      {
        label: 'Settings',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'Homeaaaaaaaaaaaaaaa',
        color: '',
        icon: '',
        childElement: <MenuLeftOptionsPopover />,
      },
      {
        label: 'Chat',
        color: '',
        icon: '',
      },
      {
        label: 'Settings',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'Homeaaaaaaaaaaaaaaa',
        color: '',
        icon: '',
        childElement: <MenuLeftOptionsPopover />,
      },
      {
        label: 'Chat',
        color: '',
        icon: '',
      },
      {
        label: 'Settings',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'Homeaaaaaaaaaaaaaaa',
        color: '',
        icon: '',
        childElement: <MenuLeftOptionsPopover />,
      },
      {
        label: 'Chat',
        color: '',
        icon: '',
      },
      {
        label: 'Settings',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'Homeaaaaaaaaaaaaaaa',
        color: '',
        icon: '',
        childElement: <MenuLeftOptionsPopover />,
      },
      {
        label: 'Chat',
        color: '',
        icon: '',
      },
      {
        label: 'Settings',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'Homeaaaaaaaaaaaaaaa',
        color: '',
        icon: '',
        childElement: <MenuLeftOptionsPopover />,
      },
      {
        label: 'Chat',
        color: '',
        icon: '',
      },
      {
        label: 'Settings',
        color: '',
        icon: '',
      },
    ],
  },
]

const NavigationComponent = () => {
  const [hideMenu, setHideMenu] = useState(false)
  const optRef = React.useRef()
  return (
    <Flex direction="column" h="100%">
    {/* Top section with company logo, icon, and title */}
    <Flex justify="space-between" align="center" p={4}>
   
      <Text>Title Here</Text>
    </Flex>

    {/* Middle section with menu */}
    <Stack
      direction="column"
      spacing={4}
      css={{
        maxWidth: 240,
        overflowX: 'hidden',
        flexGrow: 1, // Grow to fill available space
        scrollbarColor: '#003566 transparent',
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
      }}
    >
      {menuConfig.map((btnConfig) => (
        <>
          <Text textColor="layout.yaleblue50" paddingLeft={3}>
            {btnConfig.label}
          </Text>
          {btnConfig.children.map((btn) => (
            <Button {...LeftMenuConversationStyle}>
              <Text
                textAlign="left"
                w="100%"
                overflow="hidden"
                textOverflow="ellipsis"
                maxWidth="200px"
                fontWeight={500}
              >
                {btn.label}
              </Text>

              <MenuLeftOptionsPopover />
              <CustomArchiveIcon {...LeftMenuConverastionItemOptionsStyle} />
            </Button>
          ))}
        </>
      ))}
    </Stack>

    {/* Bottom section with user avatar and name */}
    <Flex justify="flex-end" align="center" p={4}>
      {/* Avatar */}
      <Avatar src={img} />

      {/* User Name */}
      <Text ml={2}>a</Text>
    </Flex>
  </Flex>
  )
}
export default NavigationComponent
