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
// language
import { t } from 'i18next'

function ChatContainer() {
  // This is just a mock
  const [messages, setMessages] = useState([
    {
      type: 'user',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also`,
    },
    {
      type: 'ai',
      content: `he leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
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
              message={msg.content}
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
              placeholder={t('placeholders.placeholder_01')}
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
            {t('info_message_01')}
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default ChatContainer
