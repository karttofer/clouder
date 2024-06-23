// Dependencies
import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const LogoNavbarComponent = ({ urlImg, altImage }) => {
  return (
    <Flex w="100%" justify="center">
      <Box>
        <Link to="/login">
          <Image src={urlImg} alt={altImage} w={12} h={12} cursor="pointer" />
        </Link>
      </Box>
    </Flex>
  )
}

export default LogoNavbarComponent
