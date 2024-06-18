import React, { useState } from 'react'
import DynamicFormComponent from '../../DynamicFormComponent.jsx'
import { t } from 'i18next'
import { Container } from '@chakra-ui/react'
import noiseBg from '../../../../assets/images/noise_bg_three.svg'
import RegistrationMessageComponent from './RegistrationMessageComponent.jsx'
import LogoComponent from '../../General/LogoComponent.jsx'
import NavbarComponent from '../../Navbar/NavbarComponent.jsx'

const formConfig = [
  {
    type: 'text',
    inputType: 'text',
    name: 'email',
    label: t('registration_nickname'),
    placeholder: t('registration_nick_placeholder'),
    required: true,
  },
  {
    type: 'text',
    inputType: 'email',
    name: 'email',
    label: t('registration_email'),
    placeholder: t('registration_email_placeholder'),
    required: true,
  },
  {
    type: 'text',
    inputType: 'password',
    name: 'password',
    label: t('registration_password'),
    placeholder: t('registration_password_placeholder'),
    required: true,
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
  {
    type: 'text',
    inputType: 'password',
    name: 'password',
    label: t('registration_repeat_password'),
    placeholder: t('registration_repeat_password_placeholder'),
    required: true,
  },
]

const RegistrationComponent = () => {
  const [registrationComplete, setRegistrationComplete] = useState(false)

  const handleSubmit = (formData) => {
    console.log('Form Data:', formData)
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
      flexDir="column"
    >
      <NavbarComponent navbarType="logo" />
      {registrationComplete ? (
        <RegistrationMessageComponent />
      ) : (
        <DynamicFormComponent
          darkTheme
          enableSubmit
          submitText={t('registration_submit')}
          title={`${t('registration_title')}`}
          subtitle={t('registration_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={formConfig}
        />
      )}
    </Container>
  )
}

export default RegistrationComponent
