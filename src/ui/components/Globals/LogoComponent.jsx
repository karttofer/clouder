// Dependencies
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Dot } from 'lucide-react'

const LogoComponent = ({ message, showLogo }) => {
  return (
    <Flex flexDir="row" align="center">
      {showLogo && (
        <Text color="layout.black.black900" fontWeight="bold">
          CLOUDER
        </Text>
      )}

      {message && (
        <>
          <Text>{message}</Text>
        </>
      )}
    </Flex>
  )
}
export default LogoComponent
