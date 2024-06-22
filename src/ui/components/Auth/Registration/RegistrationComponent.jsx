// Dependencies
import React from 'react'

// Components
import DynamicStepperContainer from '../../StepperDynamicComponent.jsx'

// Configs
import { stepConfig } from './utils/configs.jsx'

const RegistrationComponent = () => {
  return (
    <DynamicStepperContainer
      stepConfig={stepConfig}
      stepChange={(e) => console.log(e)}
    />
  )
}

export default RegistrationComponent
