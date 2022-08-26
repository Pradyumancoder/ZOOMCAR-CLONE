
import { Box, Button, Checkbox, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {IoWalletOutline} from "react-icons/io5"

export const Walleat = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const handlePayment=()=>{
      window.location.href="https://paytm.com/paytmwallet"
    }
    return (
     <SimpleGrid>
      <Box>
      <Box onClick={onOpen} borderBottom="1px"> <Icon as={IoWalletOutline}/>WALLEAT</Box>
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Enter Details</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Checkbox/>
      <img style={{height:"60px"}} src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="" />
      
      </ModalBody>
  
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant='ghost' bg="yellow.300" onClick={handlePayment}>Pay</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
      </Box>
     </SimpleGrid>
    )
}
