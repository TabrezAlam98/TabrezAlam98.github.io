import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const About = () => {
  return (<>
  <Heading textAlign='left' mt={100} ml={150}>About me</Heading>
    <SimpleGrid  width='80%' margin='auto' mt={50}>
 
    <Box bg='rgb(201,246,205)' height='400px'>
      <Heading mt={100}> About section  Box</Heading>
    </Box>
</SimpleGrid>
</>
  )
}

export default About