// Dependencies
import React from 'react'
import { Container, Flex, Box } from '@chakra-ui/layout'
// Components
import SelectComponent from '../SelectComponent.jsx'
import ChatMessageComponent from './ChatMessagesComponent.jsx'
// Configs
import { chatMenuItems, selectInitialValue } from './configs.js'

const ChatComponent = () => {
  return (
    <Container height="100%">
      <Flex
        padding="15px"
        direction="column"
        height="100%"
        justify="space-between"
      >
        <Box>
          <SelectComponent
            initialValue={selectInitialValue}
            placeholder="Select an option"
            items={chatMenuItems}
            type="radio"
          />
        </Box>
        <Box>
          <ChatMessageComponent />
        </Box>
      </Flex>
    </Container>
  )
}
export default ChatComponent
