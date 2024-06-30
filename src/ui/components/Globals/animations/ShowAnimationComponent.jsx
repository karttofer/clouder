// Dependencies
import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

const ShowAnimationComponent = ({ jsx }) => {
  return (
    <AnimatePresence mode="wait">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {jsx}
      </MotionBox>
    </AnimatePresence>
  )
}

export default ShowAnimationComponent
