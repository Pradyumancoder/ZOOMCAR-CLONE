import { Box, Button ,FormControl,FormLabel,Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react"
import React from "react"
import { Icon } from '@chakra-ui/react'

export function Modale() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} bg="#ededed" fontSize="revert" fontWeight="400">Round Trip</Button>
        
  
        <Modal
          size="lg"
          ModaleRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          
        >
          <ModalOverlay />
          <ModalContent paddingBottom="60px">
           <Box>
            <Text p="2">Travelling From</Text>
           </Box>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <Box p="3" border="1px" height="100px" mt="25px" borderRadius="7"  display={"flex"} justifyContent="space-between">
          
           <Box>
           <Text >Schedule a Round Trip</Text>
            <Text fontSize="sm" color="grey">Outstation Road Trips, Long Drives, Shopping Malls etc.</Text>
           </Box>
            <Box ml="11px" >
              <img src="https://zoomcar-assets.zoomcar.com/images/original/a8f2fbd8d5608fd6890020e267a76f84b15f4d82.png?1594715131" alt="" width="115px" />
            </Box>
           </Box>
            </ModalBody>
  
            <ModalFooter>

             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }