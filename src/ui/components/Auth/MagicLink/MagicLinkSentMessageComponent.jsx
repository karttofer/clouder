// Dependencies
import React from 'react'
import { t } from 'i18next'

// Components
import DynamicFormComponent from 'Components/Form/DynamicFormComponent.jsx'
import ShowAnimationComponent from 'Components/Globals/animations/ShowAnimationComponent.jsx'

const formConfig = [
  {
    type: 'links',
    links: [
      {
        label: t('common.back_to_login'),
        path: '/login',
      },
    ],
  },
]

const MagicLinkSentMessageComponent = ({ userEmail }) => {
  return (
    <ShowAnimationComponent
      jsx={
        <DynamicFormComponent
          darkTheme
          title={`${t('email_just_sent_title')} ${userEmail}`}
          subtitle={t('email_just_sent_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={formConfig}
        />
      }
    ></ShowAnimationComponent>
  )
}
export default MagicLinkSentMessageComponent
