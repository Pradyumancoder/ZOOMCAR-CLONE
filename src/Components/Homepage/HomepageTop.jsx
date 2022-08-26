import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../Homepage/Top.module.css"
import {  Modale } from './Modale'

export const HomepageTop = () => {

const navigate=useNavigate()

  const handlemove=()=>{
    navigate('/bookingcars')
  }

  return (
    <Box className={styles.top}>
    <Box className={styles.selection} >
    <Box width="20rem"   >
       <Modale/>
        <Box border={"1px"} p="4" width={"100%"} color="gray" bg={"white"} borderRadius="5">Pick Up City,AirPort,Address or Hotel</Box>
        <Button border={"1px"} p="4" width={"100%"} color="#a8a8a8" bg={"#10a310"} borderRadius="5" mt="3" onClick={handlemove}>FIND CARS</Button>
    </Box>
    </Box>
    </Box>
  )
}
