
'use client'
import { ChakraProvider,Heading,Text } from '@chakra-ui/react'
import Features from './Features'
import Header from './Header'
import Practise from './Practise'
import Pricing from './Pricing'


function MyApp() {
  return (
    <ChakraProvider>
    {/* <Practise/> */}
 
<Header/>
<Pricing/>
<Features/>
       
    </ChakraProvider>
  )
}

export default MyApp