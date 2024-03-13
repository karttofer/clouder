// Dependencies
import React from 'react'
import {
  Button,
  Stack,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  Spacer,
} from '@chakra-ui/react'

import { CustomHDotsIcon } from '../../assets/chakra/icons'

// Icon
import { CustomArchiveIcon, CustomPencilIcon } from '../../assets/chakra/icons'

// Style
import {
  SliderBarPrimaryTheme,
  IconButtonTheme,
  LeftMenuItemsTheme,
  LeftMenuItemTextTheme,
} from '../../assets/chakra/appStyle.js'

// Components
import MenuLeftOptionsPopover from './MenuLeftOptionsPopover.jsx'

import { AnimatePresence, motion } from 'framer-motion'

import img from '../../assets/images/dan_test_img.png'

const menuConfig = [
  {
    label: 'Yesterday',
    children: [
      {
        label: 'a',
        color: '',
        icon: '',
      },
      {
        label: 'd',
        color: '',
        icon: '',
      },
      {
        label: 'g',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'e',
        color: '',
        icon: '',
      },
      {
        label: 'k',
        color: '',
        icon: '',
      },
      {
        label: 'x',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'asdas',
        color: '',
        icon: '',
      },
      {
        label: 'asdaaa',
        color: '',
        icon: '',
      },
      {
        label: 'dqw',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'dfsd',
        color: '',
        icon: '',
      },
      {
        label: 'cxzcbv',
        color: '',
        icon: '',
      },
      {
        label: 'asdqweref',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'hyjhty',
        color: '',
        icon: '',
      },
      {
        label: 'klu',
        color: '',
        icon: '',
      },
      {
        label: 'kuiku',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'bv',
        color: '',
        icon: '',
      },
      {
        label: 'kuiku',
        color: '',
        icon: '',
      },
      {
        label: 'ioli',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'Yesterday',
    children: [
      {
        label: 'bv',
        color: '',
        icon: '',
      },
      {
        label: 'kuiku',
        color: '',
        icon: '',
      },
      {
        label: 'ioli',
        color: '',
        icon: '',
      },
    ],
  }
]

const NavigationComponent = () => {
  return (
    <Flex h="100%" direction="column">
      {/* Top section with company logo, icon, and title */}
      <Flex justify="space-between" align="center" p={5}>
        <Heading color="white" fontSize="1.2em">
          Clouder
        </Heading>
        <CustomPencilIcon {...IconButtonTheme("button.icon.inner")} />
      </Flex>
      <Divider css={{ opacity: '.1' }} marginBottom="10px" />
      <Stack  h="100%" direction="column" spacing={2} {...SliderBarPrimaryTheme}>
        {menuConfig.map((btnConfig) => (
          <>
            <Text textColor="primary.white10" paddingLeft={3}>
              {btnConfig.label}
            </Text>
            {btnConfig.children.map((btn, childIndex) => (
              <Flex key={`${btn}-${childIndex}`} {...LeftMenuItemsTheme()}>
                <Text {...LeftMenuItemTextTheme}>{btn.label}</Text>

                <MenuLeftOptionsPopover />
                <Button {...IconButtonTheme("button.icon.inner")}>
                  <CustomArchiveIcon />
                </Button>
              </Flex>
            ))}
          </>
        ))}
      </Stack>
      <Divider css={{ opacity: '.1' }} />

      <Button
        p={0}
        w="100%"
        height="60px"
        css={{ background: 'transparent' }}
        _hover={{
          background: 'layout.white.white5',
          cursor: 'pointer',
        }}
      >
        <Flex
          w="100%"
          justify="flex-start"
          align="center"
          paddingLeft={3}
          paddingRight={3}
          marginTop={2}
        >
          <Avatar src={img} paddingRight={2} />
          <Text color="white">Jhornan Colina</Text>
          <Spacer />
        </Flex>
      </Button>
    </Flex>
  )
}
export default NavigationComponent
