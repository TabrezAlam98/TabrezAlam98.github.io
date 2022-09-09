import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const Contact = () => {
  return (<>
  <Heading textAlign='left' mt={100} ml={150}>Contact </Heading>
    <SimpleGrid  width='80%' margin='auto' mt={50}>
 
    <Box bg="rgb(244,207,245)" height='400px'>
      <Heading mt={100}> contact section</Heading>
    </Box>
</SimpleGrid>
</>
  )
}

export default Contact