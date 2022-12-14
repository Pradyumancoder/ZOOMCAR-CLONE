import { Alert, AlertIcon, Box, Button, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {CgCreditCard} from "react-icons/cg"
import { Link } from 'react-router-dom'
import { HomePage } from '../Homepage/HomePage'
export const Card = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
 
  const handlepay=()=>{
     alert("Vehicle now booked ✌️ ride safe")
 }
    
  return(
   <SimpleGrid>
    <Box>
    <Box onClick={onOpen} borderBottom="1px"> <Icon as={CgCreditCard}/> Credit / Debit / ATM Card</Box>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Enter Details</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <Input variant='flushed' placeholder='Card Number' />
    <Box display={"flex"}>
    <Input variant='flushed' placeholder='Expiry(MM/YY)' />
    <Input variant='flushed' placeholder='CVV' />
    </Box>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Link to ="/">
      <Button onClick={handlepay}  variant='ghost' bg="yellow.300">Pay</Button>
      </Link>
    </ModalFooter>
  </ModalContent>
</Modal>

    </Box>
   </SimpleGrid>
  )
}
