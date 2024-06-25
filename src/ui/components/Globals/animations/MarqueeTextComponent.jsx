// Dependencies
import React from 'react'
import { motion } from 'framer-motion'
import { Box, Container } from '@chakra-ui/react'

const MarqueeTextComponent = ({ children, speed = 10 }) => {
  const marqueeVariants = {
    animate: {
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <Container maxW="100%" overflow="hidden" whiteSpace="nowrap" p={0}>
      <Box display="flex">
        <motion.div
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          variants={marqueeVariants}
          animate="animate"
        >
          {children}
        </motion.div>
      </Box>
    </Container>
  )
}

export default MarqueeTextComponent
