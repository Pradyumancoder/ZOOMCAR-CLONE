// https://json-server-mocker-react101e4.herokuapp.com/data

import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import {AiFillStar} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

export const CarDetails = () => {
    const [Data,setData]=useState([])
    const handleData=()=>{
        axios(`https://json-server-mocker-react101e4.herokuapp.com/data`)
        .then((res)=>setData(res.data))
    }
    useEffect(()=>{
        handleData()
    },[])
let date=Date.now()

   console.log(Data)


   let navigate=useNavigate()
   const [arr,setarr]=useState([])
   const Bookingdata=(img,text,location,price,name)=>{
      setarr({img,text,location,price,name})
      window.location.href="/checkout"
      
      
   }
   
   console.log(arr)
   
   useEffect(()=>{
       localStorage.setItem('data',JSON.stringify(arr))
       
   },[arr])
  
  return (
    <Box  >
       {Data.map((el)=>(
        <Box key={el.date} display={"flex"} justifyContent="space-between"  mb="10px" boxShadow='md' p='6' rounded='md' bg='white'>
        <Box >
            <img style={{height:"130px",width:"200px",borderRadius:"5px"}} src={el.imgsrc} alt="" />
        </Box>
        <Box>
            <Text>{el.carname}</Text>
            <Box fontSize={"10px"} color="grey">{el.seater}</Box>
            <Box display={"flex"} gap="3"  alignItems="center"><AiFillStar color="#c77c0c"/>{el.text}</Box>
        </Box>
        <Box width={"195px"}>
            <Text border={"1px solid  #e0e0e0"} bg="#f5f5f5" borderRadius={"5"} textAlign="center" fontSize={"10px"}>{el.location}</Text>
        </Box>
        <Box>
            <Box fontWeight={"bold"}>{el.price}</Box>
            <Box mt="5">
                <Button bg="white" border="1px solid #10a310" _hover={{background:"#10a310",color:"white"}} onClick={()=>Bookingdata(el.imgsrc,el.text,el.location,el.price,el.location)}>Book Now</Button>
            </Box>
        </Box>
       </Box>
       ))}
    </Box>
  )
}