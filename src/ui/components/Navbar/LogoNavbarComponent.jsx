import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const LogoNavbarComponent = ({ urlImg, altImage }) => {
  return (
    <Flex w="100%" justify="center">
      <Box transform="translateY(-100px)">
        <Link to="/login">
          <Image src={urlImg} alt={altImage} w={20} h={20} cursor="pointer" />
        </Link>
      </Box>
    </Flex>
  )
}

export default LogoNavbarComponent
