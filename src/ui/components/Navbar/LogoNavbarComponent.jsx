import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'

const LogoNavbarComponent = ({ urlImg, altImage }) => {
  return (
    <Flex justify="center">
      <Box>
        <Image src={urlImg} alt={altImage} w={32} h={32} />
      </Box>
    </Flex>
  )
}

export default LogoNavbarComponent
