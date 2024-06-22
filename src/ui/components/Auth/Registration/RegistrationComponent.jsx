// Dependencies
import React, { act, useState } from 'react'
import { t } from 'i18next'

// Background
import lineBg from '../../../../assets/images/noise_bg_three.svg'
import avatarOne from '../../../../assets/images/avatars/avatar_01.png'
import avatarTwo from '../../../../assets/images/avatars/avatar_02.png'
import avatarThree from '../../../../assets/images/avatars/avatar_03.png'
import avatarFouth from '../../../../assets/images/avatars/avatar_04.png'

// Components
import DynamicFormComponent from '../../DynamicFormComponent.jsx'
import RegistrationMessageComponent from './RegistrationMessageComponent.jsx'

// Anims
import { topBottomAnim } from '../../../../assets/chakra/appStyle.js'

// Components
import DynamicStepperContainer from '../../StepperDynamicComponent.jsx'

const formConfig = [
  {
    type: 'text',
    inputType: 'text',
    name: 'nickname',
    label: t('registration_nickname'),
    placeholder: t('registration_nick_placeholder'),
    validation: {
      required: true,
      errorEmptyMessage: 'Ups! You need to enter a nickname',
    },
  },
  {
    type: 'text',
    inputType: 'email',
    name: 'email',
    label: t('registration_email'),
    placeholder: t('registration_email_placeholder'),
    required: true,
    validation: {
      required: true,
      errorEmptyMessage: 'Ups, you need to enter an email address.',
    },
  },
  {
    type: 'text',
    inputType: 'password',
    name: 'password',
    label: t('registration_password'),
    placeholder: t('registration_password_placeholder'),
    required: true,
    hint: 'Password must be 12+ chars, include upper & lower case letters, a number, and a special character (e.g., P@ssw0rd123!).',
    validation: {
      required: true,
      errorEmptyMessage: `Ups! You need to enter a password`,
      errorPatternMessage: `Password isn't strong enough, add more characters, numbers, and special characters`,
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:,.<>?/~]).{12,}$/,
    },
  },
  {
    type: 'text',
    inputType: 'password',
    name: 'repeated_password',
    label: t('registration_repeat_password'),
    placeholder: t('registration_repeat_password_placeholder'),
    validation: {
      required: true,
      errorEmptyMessage: `Ups! You need to enter a password`,
    },
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

const formConfigAvatarSelect = [
  {
    type: 'avatar',
    label: t('registration_select_avatar_field_title'),
    hint: t('registration_select_avatar_field_title_hint'),
    options: [
      {
        value: 'avatar1',
        src: avatarOne,
        alt: 'Avatar 1',
      },
      {
        value: 'avatar2',
        src: avatarTwo,
        alt: 'Avatar 2',
      },
      {
        value: 'avatar3',
        src: avatarThree,
        alt: 'Avatar 3',
      },
      {
        value: 'avatar4',
        src: avatarFouth,
        alt: 'Avatar 4',
      },
    ],
  },
  // Otros campos del formulario
]

const stepConfig = [
  {
    title: 'Registration',
    component: ({ onComplete }) => {
      const handleSubmit = (formData) => {
        console.log('Form Data:', formData)
        onComplete()
      }

      return (
        <DynamicFormComponent
          animationType={topBottomAnim}
          onSubmit={handleSubmit}
          showLogo
          darkTheme
          enableSubmit
          submitText={t('next')}
          title={`${t('registration_title')}`}
          subtitle={t('registration_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={formConfig}
        />
      )
    },
  },
  {
    title: 'Profile image',
    component: ({ onComplete }) => {
      const handleSubmit = (formData) => {
        console.log('Form Data:', formData)
        onComplete()
      }
      return (
        <DynamicFormComponent
          darkTheme
          animationType={topBottomAnim}
          onSubmit={handleSubmit}
          showLogo
          enableSubmit
          submitText={t('next')}
          title={`${t('registration_select_avatar_title')}`}
          subtitle={t('registration_select_avatar_subtitle')}
          margin={5}
          maxW="500px"
          formConfig={formConfigAvatarSelect}
        />
      )
    },
  },
  {
    title: 'Done! 🎉',
    component: () => <p>asdas</p>,
  },
]

const RegistrationComponent = () => {
  return (
    <DynamicStepperContainer
      stepConfig={stepConfig}
      stepChange={(e) => console.log(e)}
    />
  )
}

export default RegistrationComponent