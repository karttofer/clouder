// Dependencies
import React from 'react'
import { Container, Flex, Text, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { t } from 'i18next'

// Assets
import noiseBg from 'Assets/images/noise_bg_one.svg'

// Components
import LogoComponent from 'Components/Globals/LogoComponent.jsx'

const LoginMessageComponent = () => {
  const clouderArray = new Array(5).fill('CLOUDER')

  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const staggerItem = (index) => ({
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1 - index * 0.15,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  })

  return (
    <Container
      h="100%"
      backgroundImage={noiseBg}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Flex
        h="100%"
        flexDir="column"
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        align="center"
        justify="center"
      >
        <Box mb="20px">
          <LogoComponent message={t('powered_by_openai')} />
        </Box>
        {clouderArray.map((text, index) => (
          <motion.div key={index} variants={staggerItem(index)}>
            <Text
              fontSize="6.7em"
              color="layout.black.black900"
              fontWeight="bold"
            >
              {text}
            </Text>
          </motion.div>
        ))}
      </Flex>
    </Container>
  )
}

export default LoginMessageComponent
