// Dependencies
import React from 'react'
import { Box } from '@chakra-ui/react'
import { t } from 'i18next'

// Components
import DynamicFormComponent from '../../DynamicFormComponent.jsx'

const formConfig = [
  {
    type: 'links',
    links: [
      {
        label: t('back_to_login'),
        path: '/login',
      },
    ],
  },
]

const MagicLinkSentMessageComponent = ({ userEmail }) => {
  return (
    <Box>
      <DynamicFormComponent
        title={`${t('email_just_sent_title')} ${userEmail}`}
        subtitle={t('email_just_sent_subtitle')}
        margin={5}
        maxW="500px"
        formConfig={formConfig}
      />
    </Box>
  )
}
export default MagicLinkSentMessageComponent
