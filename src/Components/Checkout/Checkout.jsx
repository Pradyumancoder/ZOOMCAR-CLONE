import { Box, Button, Icon, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import {TbManualGearbox} from "react-icons/tb"
import {FaOilCan} from "react-icons/fa"
import {IoEllipse} from "react-icons/io5"
import {BsFillSquareFill} from "react-icons/bs"
import {IoIosStar} from "react-icons/io"
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {



let all=JSON.parse(localStorage.getItem('data'))

let navigate=useNavigate()
const handlepay=()=>{
navigate('/payment')
}


  return (
    <SimpleGrid border={"1px solid"} justifyContent="center">
        <Box display={"flex"} justifyContent="space-between">
            <Box fontWeight={"500"}>{all.name}
            <Box display={"flex"} gap="5">
            <Box fontSize={"12px"}> <Icon as={TbManualGearbox}/> Manual</Box>
            <Box fontSize={"12px"}> <Icon as={FaOilCan}/>Petrol</Box>
            </Box>
            </Box>
            
            
            <Box>
                <img src={all.img} style={{height:"110px" ,width:"166px"}} alt="" />
            </Box>
         
        </Box>
        <Box>
        <Box mt="5">
        <Icon color={"#10a310"} as={IoEllipse}/>
        Sat, 23 Jul, 01:00 AM
        </Box>
        <Box mt="5">
        <Icon color={"red"} as={BsFillSquareFill}/>
        Sun, 24 Jul, 09:00 AM
        </Box>
        <Box display={"flex"} mt="5">
        <img style={{height:"25px", width:"25px"}} src="https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852" alt="" />
        Unlimited Kms without Fuel
        </Box>
        <Box>
        <Icon size="md" as={IoIosStar} mt="5" />
        {all.text}
        </Box>
        <Box border={"1px solid #f5f5f5 "} bg="#f5f5f5" color={"blue.300"} mt="3">
        You will get a clean and sanitized car. Exact car location will be shared post-booking
        </Box>
        </Box>
        <Box border={"1px solid #f5f5f5"} mt="3" bg="#f5f5f5">
        <Box>How Damage Protection Works?</Box>
        <Box width={"600px"}>Incase of accidents or any damage to the car, Zoomcar will take care of the expenses. You pay the minimum amount as per the package and we take care of the rest. Higher the package you select, lower the risk at your end for any damage. Please note that this is applicable solely in the case of damage to the vehicle and does not cover for any other third party loss. Renter needs to IMMEDIATELY inform/seek assistance from Zoomcar when an incident occurs, else this package will be void.</Box>
        </Box>
<Box boxShadow='2xl' p='6' rounded='md' bg='white' position={"sticky"} bottom="0" >
<Box display={"flex"} justifyContent="space-between" mt="5">
        <Box >
        {all.price}
        </Box>
        <Box>    
        Apply Coupon
        </Box>
        </Box>
        <Button bg="#10a310" _hover={{color:"white"}} mt="5"ml="200" width={"200px"} onClick={handlepay} >Payment</Button>
</Box>
    </SimpleGrid>
  )
}