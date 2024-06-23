// Dependencies
import React from 'react'

// Components
import DynamicStepperContainer from 'Components/Form/StepperDynamicComponent.jsx'

// Configs
import { stepConfig } from './utils/configs.jsx'

const RegistrationComponent = () => {
  return (
    <DynamicStepperContainer
      stepConfig={stepConfig}
      stepChange={(event) => console.log(event)}
    />
  )
}

export default RegistrationComponent
