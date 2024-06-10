// Dependencies
import React from 'react'

// Icons
import {
  CustomSparkIcon,
  CustomSparkleIcon,
  CustomZapIcon,
  CustomBrainIcon,
  CustomDownloadIcon,
} from '../../../assets/chakra/icons'

export const chatMenuItems = [
  {
    value: '0',
    label: 'Clouder GTPs',
    icon: <CustomBrainIcon />,
    hint: 'Our model, trained with AWS Knowledges',
    type: 'radio',
  },
  {
    value: '1',
    label: 'Chat GPT4o',
    icon: <CustomSparkIcon />,
    hint: 'Newest and most advanced model',
    type: 'radio',
  },
  {
    value: '2',
    label: 'Chat GPT4',
    icon: <CustomSparkleIcon />,
    hint: 'Advanced model for complex tasks',
    type: 'radio',
  },
  {
    value: '3',
    label: 'Chat GPT 3.5',
    icon: <CustomZapIcon />,
    hint: 'Great for everyday tasks',
    type: 'radio',
  },
  {
    type: 'divider',
  },
  {
    label: 'Save conversation',
    icon: <CustomZapIcon />,
    for: 'save_conversation_switch',
    hint: 'Great for everyday tasks',
    type: 'switch',
  },
  {
    label: 'Export Conversation',
    icon: <CustomDownloadIcon />,
    type: 'switch',
  },
]
