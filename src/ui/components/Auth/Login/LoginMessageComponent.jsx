// Dependencies
import React from 'react'
import { Container, Flex, Text, Button, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ButtonThemePrimary } from '../../../../assets/chakra/appStyle'

import noiseBg from '../../../../assets/images/nouse_bg_one.svg'
import LogoComponent from '../../General/LogoComponent.jsx'
import MarqueeTextComponent from '../../General/MarqueeTextComponent.jsx'

const animation = {
  initial: {
    transform: 'translateY(0px)',
    opacity: 0,
  },
  animate: {
    transform: 'translateY(7px)',
    opacity: 1,
  },
}
const LoginMessageComponent = () => {
  return (
    <Container
      display="flex"
      flexDir="column"
      h="100%"
      backgroundImage={noiseBg}
      backgroundSize="cover"
    >
      <Flex
        marginLeft="10%"
        marginRight="10%"
        h="100%"
        justify="center"
        flexDir="column"
      >
        <Box>
          <LogoComponent message="Powered By OpenAi" />
        </Box>
        <Box>
          <motion.div {...animation} transition={{ duration: '0.3' }}>
            <Text fontSize="4xl" color="layout.black.black800">
              One platform
            </Text>
          </motion.div>
          <motion.div {...animation} transition={{ duration: '0.8' }}>
            <Text fontSize="4xl" color="layout.black.black800">
              Multiple ways to do it
            </Text>
          </motion.div>
          <Button marginBottom="20px" marginTop="20px" {...ButtonThemePrimary}>
            Learn more about us
          </Button>
        </Box>

        <motion.div {...animation} transition={{ duration: '1' }}>
          <Text maxW="420px" color="layout.black.black900" fontWeight="400">
            Clouder isn't a simple AI tool, it is an universe where won't need
            to go out to find somethnig
          </Text>
        </motion.div>
      </Flex>
    </Container>
  )
}

export default LoginMessageComponent
