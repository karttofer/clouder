// Dependencies
import { t } from 'i18next'

export const formConfig = [
  {
    type: 'google',
  },
  {
    type: 'text',
    label: t('login_form_username'),
    name: 'name',
    placeholder: t('login_form_username_placeholder'),
  },
  {
    type: 'text',
    inputType: 'password',
    label: t('login_form_password'),
    name: 'password',
    placeholder: t('login_form_password_placeholder'),
  },
  {
    type: 'links',
    links: [
      {
        label: t('login_forgot_password'),
        path: '/magic-link',
      },
      {
        label: t('login_signup'),
        path: '/sign-up',
      },
    ],
  },
]
