// Dependencies
import React, { useEffect } from 'react'
import {
  Card,
  CardBody,
  Text,
  HStack,
  Flex,
  WrapItem,
  Avatar,
  useClipboard,
} from '@chakra-ui/react'
import toast from 'react-hot-toast'
import { t } from 'i18next'

// Components
import TooltipComponent from 'Components/Globals/TooltipComponent.jsx'

// Assets
import { CustomCopyIcon, CustomRefreshCcwIcon } from 'Assets/chakra/icons'
import AIAvatar from 'Assets/images/logo.png'

const ChatBubbleComponent = ({ type, message }) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard('')

  useEffect(() => {
    setValue(message)
  }, [message, setValue])

  const notify = () =>
    toast(t('toast_copy'), {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })

  return (
    <Card marginTop="10px" marginBottom="10px">
      <CardBody>
        <Flex>
          {type === 'ai' && (
            <WrapItem>
              <Avatar
                name="AI"
                src={AIAvatar}
                background="layout.white.white0"
                margin="10px"
                size="sm"
              />
            </WrapItem>
          )}
          <Text
            color="layout.white.white0"
            padding={type === 'ai' ? '10px' : '0px'}
            bg={type === 'user' ? '' : 'layout.black.black900'}
            borderRadius="general"
            marginBlock="10px"
          >
            {message}
          </Text>
        </Flex>
        <HStack
          marginTop="10px"
          display="flex"
          align="center"
          color="layout.white.white0"
        >
          <TooltipComponent
            maxW="18px"
            label={t('button_copy')}
            jsxElement={
              <CustomCopyIcon
                onClick={(event) => {
                  onCopy(event)
                  notify()
                }}
                cursor="pointer"
                opacity=".3"
                transition="all .2s"
                _hover={{
                  opacity: 1,
                  transition: 'all .2s',
                }}
              />
            }
          />
          <TooltipComponent
            maxW="18px"
            label={t('button_regenerate')}
            jsxElement={
              <CustomRefreshCcwIcon
                cursor="pointer"
                opacity=".3"
                transition="all .2s"
                _hover={{
                  opacity: 1,
                  transition: 'all .2s',
                }}
              />
            }
          />
          {type === 'ai' && <Text color="text.hint">10:10 P.M</Text>}
        </HStack>
      </CardBody>
    </Card>
  )
}

export default ChatBubbleComponent
