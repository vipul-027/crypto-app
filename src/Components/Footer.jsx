import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"black"}
     color={"whitesmoke"} 
     minH={"48"} 
     px={"16"}
    py={["16", "8"]}

     >

        <Stack direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
        >

   <VStack w={"full"}  alignItems={["center", "flex-start"]}>
    <Text fontWeight={"bold"}>About Us</Text>
    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>We are the best
     Crypto trading App in India , We provide guidance at a very cheap price.</Text>
   </VStack>

   <VStack>
    <Avatar  boxSize={"20"}  mt={["4", "0"]}/>
    <Text>Founder</Text>
   </VStack>

        </Stack>

    </Box>
  )
}

export default Footer