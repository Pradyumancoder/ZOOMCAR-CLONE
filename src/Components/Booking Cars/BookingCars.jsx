import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../Booking Cars/booking.module.css"
import {BsArrowRight} from "react-icons/bs"
import {AiOutlineCar} from "react-icons/ai"
import {IoEllipseSharp} from "react-icons/io5"
import { CarDetails } from '../Data/CarDetails'

export const BookingCars = () => {
  return (
    <Box display={"flex"} justifyContent="space-between"  >
        <SimpleGrid justifyContent={"left"}  width={"400px"} height="530px" padding={"20px"} 
         boxShadow='md' p='6' rounded='md' bg='white' position={"sticky"} top="0" 
        >
        <Box ml="30px">
        <Text fontSize={"lg"} fontWeight="500" pt="10px" pb="10px">Seats</Text>
        <Box className={styles.seats} >
            <Box className={styles.list}>
            <Box>5</Box>
            </Box>
            <Box className={styles.list}>
            <Box>7</Box>
            </Box>
            <Box className={styles.list}>
            <Box>8</Box>
            </Box>
        </Box>
        <Text fontSize={"lg"} fontWeight="500" pt="10px" pb="10px">Car Types</Text>
        <Box className={styles.seats} >
        <Box className={styles.list}>
            <Box>SUV</Box>
            </Box>
            <Box className={styles.list}>
            <Box>hatchback</Box>
            </Box>
            <Box className={styles.list}>
            <Box>Sedan</Box>
            </Box>
        </Box>
        <Text fontSize={"lg"} fontWeight="500" pt="10px" pb="10px">Transmission</Text>
        <Box className={styles.seats} >
        <Box className={styles.list}>
            <Box>Manual</Box>
            </Box>
            <Box className={styles.list}>
            <Box>Automatic</Box>
            </Box>
            
            
        </Box>
        <Text fontSize={"lg"} fontWeight="500" pt="10px" pb="10px">Delivery Type</Text>
        <Box className={styles.seats} >
        <Box className={styles.list}>
            <Box>Home Delivery</Box>
            </Box>
            <Box className={styles.list}>
            <Box>Airport</Box>
            </Box>
            
        </Box>
        <Box mt="7">
        <Box className={styles.seats} >
        <Box className={styles.list}>
            <Box fontSize={"10"} color="blue.500">
            Enjoy free kilometers. If you leave the car with excess fuel compared to booking start, value of that extra fuel will be refunded to you
            </Box>
            </Box>
            
            
        </Box>
        </Box>
        </Box>
        <Box>

        </Box>
        </SimpleGrid>
        <Box>
        <Box display={"flex"} gap="10">
            <Box border={"2px solid #c77c0c"} display="flex"  alignItems={"center"} gap="2" boxShadow='md' p='6' rounded='md' bg='white' >
                
                <IoEllipseSharp   color="#10a310"/> Mumbai</Box>
            <Box display={"flex"} border="2px solid  #c77c0c" boxShadow='md' p='6' rounded='md' bg='white'>
                <Box  >
                    <Box fontSize={"10px"}>Start Date</Box>
                    <Box>22 Junl,2022 12:30PM</Box>
                </Box>
                <Box mt="15px" ml="20" mr="20"><BsArrowRight/></Box>
                <Box>
                    <Box fontSize={"10px"}>End Date</Box>
                    <Box>22 Junl,2022,8:30PM</Box>
                </Box>

            </Box>
        </Box>
        <Box display={"flex"} mt="10" boxShadow='md' p='6' rounded='md' bg='white' height="60px" alignItems={"center"} mb="10" >
        <Box >
        <AiOutlineCar fontSize={"30px"}/>  
        </Box>
            <Box> 
            A car for every need
            <Box fontSize={"10px"}>SUVs, Sedans, Hatchback, Luxury cars - we got it all!</Box>
            </Box>
           
        </Box>
        <Box>
            <CarDetails />   
        </Box>
        </Box>
        
        
    </Box>
  )
}
