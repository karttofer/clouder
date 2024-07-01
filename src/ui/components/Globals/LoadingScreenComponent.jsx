import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Text,
  Image,
  Spinner,
  useColorModeValue,
  keyframes,
  Flex,
} from '@chakra-ui/react'

import Logo from 'Assets/images/company-logo-dark.svg'

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`

const motivationalQuotes = [
  {
    quote: 'The best way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: 'Will Rogers',
  },
  {
    quote:
      'People who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Rob Siltanen',
  },
  {
    quote:
      'Failure will never overtake me if my determination to succeed is strong enough.',
    author: 'Og Mandino',
  },
  {
    quote: 'We may encounter many defeats but we must not be defeated.',
    author: 'Maya Angelou',
  },
]

const LoadingScreen = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('layout.black.black800', 'teal.300')
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % motivationalQuotes.length)
    }, 3000) // Cambia la frase cada 3 segundos
    return () => clearInterval(interval)
  }, [])

  return (
    <Container
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="1000"
      backdropFilter="blur(10px)"
      bg="#ffffffc2"
    >
      <Flex
        justify="center"
        align="center"
        textAlign="center"
        position="relative"
        zIndex="10"
        flexDir="column"
        width="100%"
        height="100%"
      >
        <Flex align="center" flexDir="column" marginBottom="30px">
          <Image height="80px" src={Logo} />
          <Text fontWeight="bold">CLOUDER</Text>
        </Flex>
        <Box
          margin="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mb={6}
        >
          <Text fontSize="lg" color={color} mb={2} fontWeight="bold">
            {motivationalQuotes[quoteIndex].quote}
          </Text>
          <Text fontSize="md" color="gray.500">
            – {motivationalQuotes[quoteIndex].author}
          </Text>
        </Box>
        <Spinner size="md" color={color} />
      </Flex>
    </Container>
  )
}

export default LoadingScreen
