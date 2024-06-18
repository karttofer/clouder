// Dependencies
import React, { useState } from 'react'
import { t } from 'i18next'

// Components
import DynamicFormComponent from '../../DynamicFormComponent.jsx'
import MagicLinkSentMessageComponent from './MagicLinkSentMessageComponent.jsx'
// Background
import noiseBg from '../../../../assets/images/noise_bg_two.svg'
import { Container } from '@chakra-ui/react'

const formConfig = [
  {
    type: 'text',
    label: t('recovery_input_label'),
    inputType: 'email',
    name: 'email',
    placeholder: t('recovery_input_placeholder'),
  },
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

const MagicLinkComponent = () => {
  const [magicLinkSent, setMagicLinkSent] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleSubmit = (formData) => {
    setMagicLinkSent(!magicLinkSent)
    setUserEmail(formData.email)
  }

  return (
    <Container
      backgroundSize="cover"
      backgroundImage={noiseBg}
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {!magicLinkSent ? (
        <DynamicFormComponent
          enableSubmit
          title={t('recovery_title_message')}
          subtitle={t('recovery_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={formConfig}
          onSubmit={handleSubmit}
          submitText={t('recivery_submit_text')}
        />
      ) : (
        <MagicLinkSentMessageComponent userEmail={userEmail} />
      )}
    </Container>
  )
}
export default MagicLinkComponent
