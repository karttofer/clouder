import React, { useState, useEffect } from 'react'
import {
  Container,
  Flex,
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepDescription,
  StepSeparator,
} from '@chakra-ui/react'
import {
  CustomWandBadgeCheckIcon,
  CustomCircleXIcon,
  CustomPencilIcon,
} from 'Assets/chakra/icons'
import ShowAnimationComponent from 'Components/Globals/animations/ShowAnimationComponent.jsx'

import { useDispatch, useSelector } from 'react-redux'
import { saveRegistrationStep } from 'Utils/store/action.js'

const CustomStepper = ({ config, activeStep, setActiveStep }) => {
  return (
    <ShowAnimationComponent
      jsx={
        <Stepper w="90vh" index={activeStep} marginTop="50px">
          {config.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={
                    index < activeStep ? <CustomWandBadgeCheckIcon /> : null
                  }
                  incomplete={index > activeStep ? <CustomCircleXIcon /> : null}
                  active={index === activeStep ? <CustomPencilIcon /> : null}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      }
    />
  )
}

const DynamicStepperContainer = ({ stepConfig, lineBg }) => {
  const [activeStep, setActiveStep] = useState(0)
  const dispatch = useDispatch()

  const regis_last_step = useSelector(
    (store) => store.state.user.regis_last_step
  )

  useEffect(() => {
    setActiveStep(regis_last_step || activeStep)
  }, [])

  const handleStepCompletion = () => {
    if (activeStep < stepConfig.length - 1) {
      setActiveStep((prevStep) => prevStep + 1)

      dispatch(saveRegistrationStep(activeStep + 1))
    }
  }

  const CurrentComponent = stepConfig[activeStep].component

  return (
    <Container
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      backgroundImage={lineBg}
      backgroundSize="cover"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
      >
        <Box w="100%" display="flex" justifyContent="center">
          <CustomStepper
            config={stepConfig}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Box>

        <Box w="100%" display="flex" justifyContent="center" flexGrow={1}>
          <ShowAnimationComponent
            jsx={
              <CurrentComponent
                onComplete={handleStepCompletion}
                stepChange={() => activeStep}
              />
            }
          ></ShowAnimationComponent>
        </Box>
      </Flex>
    </Container>
  )
}

export default DynamicStepperContainer
