import { Box, Button, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {FaForward} from "react-icons/fa"
export const Upi = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
   <SimpleGrid>
    <Box>
    <Box onClick={onOpen} borderBottom="1px"> <Icon as={FaForward}/> UPI</Box>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Enter Details</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <Input variant='flushed' placeholder='Enter UPI ID' />
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost' bg="yellow.300">Pay</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </Box>
   </SimpleGrid>
  )
}
