// Dependencies
import React, { useState, useRef, useEffect } from 'react'
import ChatBubbleComponent from './ChatBubbleComponent.jsx'
import { Container, Box, Flex } from '@chakra-ui/layout'
import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react'
import { CustomArrowUpIcon } from '../../../assets/chakra/icons.js'

function ChatContainer() {
  // This is just a mock
  const [messages, setMessages] = useState([
    { type: 'user', content: 'User message' },
    { type: 'ai', content: 'AI message' },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', content: inputValue }])
      setInputValue('')
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <Container height="94vh" display="flex" flexDirection="column">
      <Flex height="100%" width="100%" justify="center" alignItems="center">
        <VStack
          flex="1"
          spacing={4}
          align="stretch"
          overflow="auto"
          padding="10px"
          className="hidde_slider-bar"
          maxW="1024px"
          height="100%"
          display="flex"
          justify="end"
        >
          {messages.map((msg, index) => (
            <ChatBubbleComponent
              key={index}
              type={msg.type}
              content={msg.content}
            />
          ))}
          <div ref={messagesEndRef} />
        </VStack>
      </Flex>
      <Flex align="center" justify="center" width="100%" padding="20px">
        <Box width="100%" maxW="1024px">
          <InputGroup size="md">
            <Input
              paddingRight="64px"
              borderRadius="general"
              width="100%"
              height="45px"
              color="text.hint"
              bg="layout.black.black900"
              placeholder="Basic usage"
              _focus={{ textColor: 'white' }}
              value={inputValue}
              onChange={handleInputChange}
            />
            <InputRightElement height="100%" marginRight="20px">
              <Button
                isDisabled={!inputValue}
                height="30px"
                bg={inputValue ? 'layout.white.white0' : '#393939'}
                color={inputValue ? 'black' : 'gray'}
              >
                <CustomArrowUpIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text
            textAlign="center"
            marginTop="10px"
            color="text.hint"
            fontWeight="100"
            fontSize=".7em"
          >
            Clouder is powered by CHAT-GPT and can make mistakes. Check
            important info.
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default ChatContainer
