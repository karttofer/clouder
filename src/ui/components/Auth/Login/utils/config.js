// Dependencies
import { t } from 'i18next'

export const formConfig = [
  {
    type: 'google',
  },
  {
    type: 'text',
    label: '',
    name: 'name',
    placeholder: t('login_form_username_placeholder'),
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
