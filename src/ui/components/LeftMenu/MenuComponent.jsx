// Dependencies
import React from 'react'
import {
  Button,
  Stack,
  Divider,
  Text,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react'

// Icon
import {
  CustomArchiveIcon,
  CustomPencilIcon,
} from '../../../assets/chakra/icons.js'

// Themes
import {
  SliderBarPrimaryTheme,
  IconButtonTheme,
  LeftMenuItemsTheme,
  LeftMenuItemTextTheme,
  ButtonTheme,
} from '../../../assets/chakra/appStyle.js'

// Components
import MenuLeftOptionsPopover from './MenuLeftOptionsPopover.jsx'
import MenuLeftMenuProfile from './MenuLeftProfileIcon.jsx'
import ToggleLanguageComponent from '../ToggleLanguageComponent.jsx'

// Images
import img from '../../../assets/images/dan_test_img.png'

const menuConfig = [
  {
    label: 'Yesterday',
    children: [
      {
        label:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        color: '',
        icon: '',
      },
    ],
  },
  {
    label: 'After One Day',
    children: [
      {
        label:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        color: '',
        icon: '',
      },
    ],
  },
]

const NavigationComponent = () => {
  return (
    <Flex h="100%" direction="column">
      <Flex justify="space-between" align="center" margin={2}>
        <Button color="white" paddingLeft={1} {...ButtonTheme} w="100%">
          <Text>Clouder</Text>
          <Spacer />
          <CustomPencilIcon
            {...IconButtonTheme('button.icon.inner', 'button.icon.hover')}
          />
        </Button>
      </Flex>
      <Divider css={{ opacity: '.1' }} marginBottom="10px" />
      <Stack h="100%" direction="column" spacing={2} {...SliderBarPrimaryTheme}>
        {menuConfig.map((btnConfig) => (
          <>
            <Text textColor="primary.white10" paddingLeft={3}>
              {btnConfig.label}
            </Text>
            {btnConfig.children.map((btn, childIndex) => (
              <Flex
                key={`${btn}-${childIndex}`}
                {...LeftMenuItemsTheme()}
                padding="0px"
              >
                asdas
                <Text {...LeftMenuItemTextTheme}>{btn.label}</Text>
                <MenuLeftOptionsPopover />
              </Flex>
            ))}
          </>
        ))}
      </Stack>
      <Divider css={{ opacity: '.1' }} />
      <MenuLeftMenuProfile avatarImg={img} />
    </Flex>
  )
}
export default NavigationComponent
