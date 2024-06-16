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
// Language
import { t } from 'i18next'

export const selectInitialValue = {
  value: '0',
  label: 'select_models_01_label',
}

export const chatMenuItems = [
  {
    value: '0',
    label: 'select_models_01_label',
    icon: <CustomBrainIcon />,
    hint: 'select_models_01_hint',
    type: 'radio',
  },
  {
    value: '1',
    label: 'select_models_02_label',
    icon: <CustomSparkIcon />,
    hint: 'select_models_02_hint',
    type: 'radio',
  },
  {
    value: '2',
    label: 'select_models_03_label',
    icon: <CustomSparkleIcon />,
    hint: 'select_models_03_hint',
    type: 'radio',
  },
  {
    value: '3',
    label: 'select_models_04_label',
    icon: <CustomZapIcon />,
    hint: 'select_models_04_hint',
    type: 'radio',
  },
  {
    type: 'divider',
  },
  {
    label: t('select_save_conversation'),
    icon: <CustomZapIcon />,
    for: 'save_conversation_switch',
    hint: t('select_save_conversation_hint'),
    type: 'switch',
  },
  {
    label: t('select_export_conversation'),
    icon: <CustomDownloadIcon />,
    type: 'switch',
  },
]
