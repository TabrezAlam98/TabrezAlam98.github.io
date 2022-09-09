import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'


const Home = () => {
  return (
    <SimpleGrid columns={[1,null, 2]} spacing='40px' width='80%' margin='auto' mt={50}>
 
      <Box bg='rgb(255,240,245)' height='400px'>
        <Heading mt={100}> Heading Box</Heading>
      </Box>
    <Box bg='rgb(255,240,245)' height='400px'>
    <Heading mt={100}> Image Box</Heading>
    </Box>
     
    
    
  </SimpleGrid>
  )
}

export default Home