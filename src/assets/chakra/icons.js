import React from 'react'
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'

// New Library
import {
  ArchiveIcon,
  DotsHorizontalIcon,
  DoubleArrowLeftIcon,
  Pencil1Icon,
  CaretLeftIcon,
} from '@radix-ui/react-icons'

const CustomHDotsIcon = (props) => {
  return <Icon {...props} as={DotsHorizontalIcon} />
}
const CustomArchiveIcon = (props) => {
  return <Icon {...props} as={ArchiveIcon} />
}
const CustomDoubleArrowLeftIcon = (props) => {
  return <Icon {...props} as={DoubleArrowLeftIcon} />
}
const CustomPencilIcon = (props) => {
  return <Icon {...props} as={Pencil1Icon} />
}
const CustomCaretLeftIcon = ({ configs, click }) => {
  return (
    <Icon
      {...configs.props}
      as={CaretLeftIcon}
      boxSize={configs.size}
      onClick={click}
      css={configs.css}
    />
  )
}

export {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  CustomHDotsIcon,
  CustomArchiveIcon,
  CustomDoubleArrowLeftIcon,
  CustomPencilIcon,
  CustomCaretLeftIcon,
}