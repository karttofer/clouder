// Dependencies
import React from 'react'
import { Icon } from '@chakra-ui/react'

import {
  Pencil,
  Ellipsis,
  Archive,
  ChevronsLeft,
  ArrowLeft,
  Trash2,
  Settings,
  LogOut,
  Sparkles,
  Sparkle,
  Zap,
  Brain,
  SquareArrowUp,
  Download,
  Copy,
  RefreshCcw,
  WandSparkles,
  BadgeCheck,
  CircleX,
} from 'lucide-react'

const CustomBrainIcon = (props) => {
  return <Icon {...props} as={Brain} />
}
const CustomZapIcon = (props) => {
  return <Icon {...props} as={Zap} />
}
const CustomSparkIcon = (props) => {
  return <Icon {...props} as={Sparkles} />
}
const CustomSparkleIcon = (props) => {
  return <Icon {...props} as={Sparkle} />
}
const CustomHDotsIcon = (props) => {
  return <Icon {...props} as={Ellipsis} />
}
const CustomArchiveIcon = (props) => {
  return <Icon {...props} as={Archive} />
}
const CustomDoubleArrowLeftIcon = (props) => {
  return <Icon {...props} as={ChevronsLeft} />
}
const CustomPencilIcon = (props) => {
  return <Icon {...props} as={Pencil} />
}
const CustomCaretLeftIcon = ({ configs, click }) => {
  return (
    <Icon
      {...configs.props}
      as={ArrowLeft}
      boxSize={configs.size}
      onClick={click}
      css={configs.css}
    />
  )
}
const CustomTrashIcon = (props) => {
  return <Icon {...props} as={Trash2} />
}
const CustomGearIcon = (props) => {
  return <Icon {...props} as={Settings} />
}
const CustomExistIcon = (props) => {
  return <Icon {...props} as={LogOut} />
}
const CustomArrowUpIcon = (props) => {
  return <Icon {...props} as={SquareArrowUp} />
}
const CustomDownloadIcon = (props) => {
  return <Icon {...props} as={Download} />
}
const CustomCopyIcon = (props) => {
  return <Icon {...props} as={Copy} />
}
const CustomRefreshCcwIcon = (props) => {
  return <Icon {...props} as={RefreshCcw} />
}
const CustomWandSparklesIcon = (props) => {
  return <Icon {...props} as={WandSparkles} />
}
const CustomWandBadgeCheckIcon = (props) => {
  return <Icon {...props} as={BadgeCheck} />
}
const CustomCircleXIcon = (props) => {
  return <Icon {...props} as={CircleX} />
}

export {
  CustomRefreshCcwIcon,
  CustomCopyIcon,
  CustomHDotsIcon,
  CustomArchiveIcon,
  CustomDoubleArrowLeftIcon,
  CustomPencilIcon,
  CustomCaretLeftIcon,
  CustomTrashIcon,
  CustomGearIcon,
  CustomExistIcon,
  CustomSparkIcon,
  CustomSparkleIcon,
  CustomZapIcon,
  CustomBrainIcon,
  CustomArrowUpIcon,
  CustomDownloadIcon,
  CustomWandSparklesIcon,
  CustomWandBadgeCheckIcon,
  CustomCircleXIcon,
}
