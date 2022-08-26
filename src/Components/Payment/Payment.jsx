import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Card } from './Card'
import { Upi } from './Upi'
import { Walleat } from './Walleat'

export const Payment = () => {
  return (
    <SimpleGrid justifyContent={"center"} >
        <Card/>
        <Walleat/>
        <Upi/>
    </SimpleGrid>
  )
}
