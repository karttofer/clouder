// Dependencies
import React, { useState } from 'react'
import { t } from 'i18next'
import { motion } from 'framer-motion'
import { Container, Box } from '@chakra-ui/react'

// Components
import DynamicFormComponent from '../../Form/DynamicFormComponent.jsx'
import MagicLinkSentMessageComponent from './MagicLinkSentMessageComponent.jsx'

// Background
import noiseBg from '../../../../assets/images/noise_bg_two.svg'
import noiseBgSuccess from '../../../../assets/images/nouse_bg_success.svg'

// Anims
import { topBottomAnim } from '../../../../assets/chakra/appStyle.js'

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
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      backgroundSize="cover"
      backgroundImage={!magicLinkSent ? noiseBg : noiseBgSuccess}
    >
      <Box>
        {!magicLinkSent ? (
          <DynamicFormComponent
            animationType={topBottomAnim}
            showLogo
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
      </Box>
    </Container>
  )
}
export default MagicLinkComponent
