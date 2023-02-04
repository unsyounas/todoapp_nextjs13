
import { Box, Button, Flex, Heading, HStack, Text,Icon } from '@chakra-ui/react'

import React from 'react'
import Checkmarkicon from './Checkmarkicon'

export default function Pricing() {
  return (
    <Box maxW={"950px"} m='auto' mt='-150px' bg='white' borderRadius={"16px"} overflow='hidden' boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} >
    <Flex direction={{base:'column', md:'column',lg:'row'}}mx='20px'>
<Box bg="#cbb8ee" padding={'60px'}  textAlign='center' >
<Text fontWeight={'bold'} fontSize='24px'>Premium PRO</Text>
<Heading fontSize='40px'>$329</Heading>
<Text>billed just once</Text>
<Button marginTop={'20px'} width={"300px"} backgroundColor='#805AD5' color='white'> Get Started</Button>

</Box>
<Box  pt='50px' pl='25px' pr={'10px'}>
  <Text mb='10px'>Access these features when you get this pricing package for your business.</Text>

  <HStack mb={'15px'}>
    <Icon as={Checkmarkicon} />
    <Text>International calling and messaging API</Text>
  </HStack>
  <HStack mb={'15px'}>
    <Icon as={Checkmarkicon} />
    <Text>Additional phone numbers</Text>
  </HStack>
  <HStack mb={'15px'}>
    <Icon as={Checkmarkicon} />
    <Text>Automated messages via Zapier</Text>
  </HStack>
  <HStack mb={'15px'}>
    <Icon as={Checkmarkicon} />
    <Text>24/7 support and consulting</Text>
  </HStack>
</Box>
</Flex>




    </Box>
  )
}
