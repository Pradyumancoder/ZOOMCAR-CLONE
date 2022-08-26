import { Box, Input, InputGroup, InputLeftAddon, Link, Modal, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const navigate=useNavigate()
    const handledetail=()=>{
      navigate('/Detailform')
    }
    
  return (
  <SimpleGrid justifyContent={"center"} color="grey">
    <Box>
        <img src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="" />
        <Box>
          Enter details to login/sign-up
        </Box>
        <Box display="flex">
            <Box height="40px" width="40px" mt="3">
            
            <img  src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"  />
            </Box>
            <Box borderBottom="1px" width="sm" height="50px" display="flex" alignItems="center" onClick={onOpen}  >
            +91 | Enter Mobile Number
            

  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent height={"400px"}>
      <ModalHeader>Enter Details</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
     <Box >
     <InputGroup >
   
   <InputLeftAddon children='+91' />
   
  
   <Input type='tel' placeholder='phone number' />
   
</InputGroup>
<Input mt="3" type="email"  placeholder='Email'/>
     </Box>
  

      </ModalBody>

      <ModalFooter>
        <Button bg='rgb(16,163,16)' color="white" width={1000} onClick={handledetail} >
         Continue
        </Button>
        
      </ModalFooter>
    </ModalContent>
  </Modal>
            </Box>
        </Box>
        <Box borderBottom="1px" width="426px" mt="5" fontWeight={"500"} display="flex" alignItems="center" >
        Continue with Email ID
        </Box>
        <Box width="sm" display={"flex"} mt="3" fontWeight={"500"}    >
            Continue via Social
            <img src="https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg" alt="" />
            <img src="https://www.zoomcar.com/build/279de03b0c8ecdb4db56a79da6e775e6.svg" alt="" />
        </Box>
    </Box>
  </SimpleGrid>
  )
}
