// Dependencies
import React from 'react'
import { Card, CardBody, Text } from '@chakra-ui/react'

const ChatBubbleComponent = ({ type, mesage }) => {
  return (
    <Card marginTop="10px" marginBottom="10px">
      <CardBody>
        <Text
          color="layout.white.white0"
          padding="10px"
          bg={type === 'user' ? '' : 'layout.black.black900'}
          borderRadius="general"
          marginBlock="10px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Text color="text.hint" textAlign={type === 'user' ? 'right' : 'left'}>
          10:10 P.M
        </Text>
      </CardBody>
    </Card>
  )
}

export default ChatBubbleComponent
