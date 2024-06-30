// Dependencies
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Dot } from 'lucide-react'

const LogoComponent = ({ message }) => {
  return (
    <Flex flexDir="row" align="center">
      <Text color="layout.black.black900" fontWeight="bold">
        CLOUDER
      </Text>
      {message && (
        <>
          <Dot />
          <Text>{message}</Text>
        </>
      )}
    </Flex>
  )
}
export default LogoComponent
