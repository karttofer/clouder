import React, { useEffect } from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Modal,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

const ModalComponent = ({ autoOpen, modalTitle, jsxContent, jsxBottom }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (autoOpen) {
      OpenModal()
    }
  })

  const OpenModal = () => {
    onOpen()
  }

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{jsxContent}</ModalBody>
        <ModalFooter>{jsxBottom}</ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalComponent
