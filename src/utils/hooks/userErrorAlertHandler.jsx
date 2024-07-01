import React from 'react'
import { toast } from 'react-hot-toast'

const errorByCode = {
  409: {
    errTitle: 'Conflict Error',
    errMessage: `This information already exists in the backend, could be a new user or document with the same names. This information won't be uploaded.`,
    alertType: 'warning',
  },
  500: {
    errTitle: 'Server Error',
    errMessage: `There was an error with the server. Please try again later.`,
    alertType: 'error',
  },
  200: {
    errTitle: 'Success',
    errMessage: `The information was successfully uploaded.`,
    alertType: 'success',
  },
  404: {
    errTitle: 'Information does no exist',
    errMessage: `The information you are trying to access does not exist.`,
    alertType: 'error',
  },
}

export const translateErrorCode = (error) => {
  return errorByCode[error]
}

const userErrorAlertHandler = (error) => {
  const errorAlert =
    typeof errorCode === 'number'
      ? translateErrorCode(error)
      : {
          errTitle: error.errTitle,
          errMessage: error.errMessage,
          alertType: error.alertType,
        }
  console.log(error)
  if (errorAlert) {
    toast.custom(
      (t) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
            transform: t.visible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'all 0.5s ease-in-out',
            borderLeft: `4px solid ${
              errorAlert.alertType === 'error'
                ? '#f44336'
                : errorAlert.alertType === 'success'
                  ? '#4caf50'
                  : '#ff9800'
            }`,
          }}
        >
          <div style={{ marginRight: '8px' }}>
            <span role="img" aria-label={errorAlert.alertType}>
              {errorAlert.alertType === 'error'
                ? '❌'
                : errorAlert.alertType === 'success'
                  ? '✅'
                  : '⚠️'}
            </span>
          </div>
          <div>
            <strong>{errorAlert.errTitle}</strong>
            <div>{errorAlert.errMessage}</div>
          </div>
        </div>
      ),
      {
        id: new Date().getTime(),
        duration: 5000,
        position: 'top-center',
      }
    )
  }
}

export default userErrorAlertHandler
