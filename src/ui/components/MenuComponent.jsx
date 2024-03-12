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
} from '@chakra-ui/react'

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
]

const NavigationComponent = () => {
  const [hideMenu, setHideMenu] = useState(false)
  return (
    <>
      <Flex>
        <AnimatePresence>
          <motion.div
            animate={{ left: !hideMenu ? -245 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'relative',
            }}
          >
            <Container
              height="100vh"
              maxW={250}
              backgroundColor="layout.yaleblue300"
            >
              <Box>
                <Flex
                  padding={3}
                  paddingBottom={5}
                  paddingTop={4}
                  align="center"
                >
                  <Heading
                    fontWeight={700}
                    fontFamily="w-sans-black"
                    fontSize="2xl"
                    color="white"
                  >
                    CLOUDER
                  </Heading>
                  <Spacer />
                  <CustomPencilIcon
                    color="white"
                    {...LeftMenuConverastionItemOptionsStyle}
                  />
                </Flex>
                <Divider marginBottom={5} css={{ opacity: '.1' }} />
                <Stack direction="column" spacing={4}>
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
                          <CustomArchiveIcon
                            {...LeftMenuConverastionItemOptionsStyle}
                          />
                        </Button>
                      ))}
                    </>
                  ))}
                </Stack>
              </Box>
            </Container>
          </motion.div>
          <AnimatePresence>
            <motion.div
              animate={{ left: !hideMenu ? -245 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
              }}
            >
              <Container height="100vh">
                <Flex height="100%" justify="center" align="center">
                  <CustomCaretLeftIcon
                    click={() => setHideMenu(!hideMenu)}
                    color="black"
                    configs={{
                      props: { ...LeftMenuConversationHideIconStyle },
                      size: 6,
                      css: {
                        transform: hideMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                      },
                    }}
                  />
                </Flex>
              </Container>
            </motion.div>
          </AnimatePresence>
        </AnimatePresence>
      </Flex>
    </>
  )
}
export default NavigationComponent
