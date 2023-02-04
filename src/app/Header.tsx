import { Box, Heading,Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={{base:'left',md:'left', lg:'center'}} pl='10px'  bg="#6B46C1" pt="90px" color="white" pb="250">

        <Heading>Simple pricing for your business</Heading>
        <Text pt="10px">Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}
