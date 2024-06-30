// Dependencies
import React from 'react'
import { Box, Tooltip } from '@chakra-ui/react'

const TooltipComponent = ({ jsxElement, label, maxW }) => {
  return (
    <Tooltip
      label={label}
      background="layout.black.black900"
      borderRadius="default"
    >
      <Box height={maxW}>{jsxElement}</Box>
    </Tooltip>
  )
}
export default TooltipComponent
