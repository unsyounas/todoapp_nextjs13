import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Practise() {
  return (
<>
<h1 style={{color:"blue",fontSize:'20px'}}>This is Chakra ui</h1>
      <h2>Hello World</h2>
      <p>This is Paraggraph</p>
      <Heading>This is default Chakra Heading</Heading>
      <Heading as="h1" color={"red"} fontSize='48px' >This is Chakra H1 Heading</Heading>
      <Heading as="h3" color="blue">This is Chakra H3 Heading</Heading>
      <Text fontWeight={'bold'}>This is paragraph created by Chakra</Text>

</> )
}
