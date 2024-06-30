import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  GridItem,
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

const CustomStepper = ({ config, activeStep }) => {
  return (
    <ShowAnimationComponent
      jsx={
        <Stepper w="90vw" index={activeStep} marginTop="50px">
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

  const isThirdPartyRegis = useSelector(
    (store) => store.state.user.is_third_party_login
  )

  useEffect(() => {
    setActiveStep(regis_last_step || 0)
  }, [regis_last_step])

  useEffect(() => {
    if (isThirdPartyRegis) {
      handleStepCompletion()
    }
  }, [isThirdPartyRegis])

  const handleStepCompletion = () => {
    if (activeStep < stepConfig.length - 1) {
      const nextStep = activeStep + 1
      setActiveStep(nextStep)
      dispatch(saveRegistrationStep(nextStep))
    }
  }

  const CurrentComponent = stepConfig[activeStep]?.component || null

  if (!CurrentComponent) {
    console.error('No component found for the current step')
    return null
  }

  return (
    <Container maxW="100vw" h="100vh" p={0}>
      <Grid
        templateAreas={{
          base: `"step" "component"`,
          md: `"step" "component"`,
        }}
        h="100%"
        gridTemplateRows={{
          base: 'auto 1fr',
          md: 'auto 1fr',
        }}
        gridTemplateColumns={{
          base: '1fr',
          md: '1fr',
        }}
        gap={4}
        p={4}
      >
        <GridItem area="step" display="flex" justifyContent="center">
          <CustomStepper config={stepConfig} activeStep={activeStep} />
        </GridItem>
        <GridItem area="component" display="flex" justifyContent="center">
          <ShowAnimationComponent
            jsx={
              <CurrentComponent
                onComplete={handleStepCompletion}
                stepChange={() => activeStep}
              />
            }
          />
        </GridItem>
      </Grid>
    </Container>
  )
}

export default DynamicStepperContainer
