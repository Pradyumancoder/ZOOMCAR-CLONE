import { Box, Button, form, FormLabel, Input, InputGroup, InputRightElement, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import {BsEye,BsEyeSlash,BsArrowLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../../context/Authcontext'
export const DetailForm = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show) 
    const {handleLogin}=useContext(Authcontext)
    let navigate=useNavigate()
    const [login,setLogin]=useState({
      name:"",
      password:""
    })
    const [data,setData]=useState({})
    const Logindata=(e)=>{
      const{name,value}=e.target;
      setLogin({
        ...login,
        [name]:value
      })
    }

    const submitdata=(e)=>{
    e.preventDefault()
    setData(login)
    handleLogin()
    // navigate('/')
    window.location.href="/"
    }
   
    useEffect(()=>{
      localStorage.setItem('logindetails',JSON.stringify(data))
    },[data])

    
   
  return (
    <SimpleGrid justifyContent={"center"} >
        <Box >
            
        <Box fontWeight={700}  >
         Fill In A Few More Details
        </Box>
        <Box fontSize={"12px"} color="grey">One last step to create a new account</Box>
        <form onSubmit={submitdata} width={"140%"}>
       
        <Input onChange={Logindata} name="name" focusBorderColor='#10a310' type="text" mt="8" placeholder='Full Name (As Per Driving License)'/>
        

        <InputGroup size='md' mt="5">
      <Input
        pr='4.5rem'
        focusBorderColor='#10a310'
        type={show ? 'text' : 'password'}
        onChange={Logindata}
        name="password"
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? <BsEyeSlash/> : <BsEye/>}
        </Button>
      </InputRightElement>
    </InputGroup>
        <Box fontSize={"12px"} color={'grey'}>Min 8 Characters</Box>
        <Button type="submit" ml="15%" width={"16rem"} mt="20%" bg="#10a310" color="white" >Sumbit</Button>
        </form>
        </Box>
    </SimpleGrid>
  )
}
