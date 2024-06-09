// Dependencies
import React from 'react'
import { Container, Flex, Box } from '@chakra-ui/layout'
// Components
import SelectComponent from '../SelectComponent.jsx'
// Configs
import { chatMenuItems } from './configs.js'

const ChatComponent = () => {
  return (
    <Container>
      <Flex padding="15px">
        <Box>
          <SelectComponent
            placeholder="Select an option"
            items={chatMenuItems}
            type="radio"
          />
        </Box>
        <Box></Box>
      </Flex>
    </Container>
  )
}
export default ChatComponent
