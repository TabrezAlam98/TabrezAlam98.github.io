import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const Project = () => {
  return (
    <>
     <Heading textAlign='left' mt={100} ml={150}>Projects</Heading>
     <SimpleGrid columns={[1,null, 2]} spacing='40px' width='80%' margin='auto' mt={50}>
     <Box bg='rgb(199,235,246)' height='300px'>
        <Heading mt={50}>Project -1</Heading>
        <Heading mt={100}> project image  Box</Heading>
      </Box>
    <Box bg='rgb(199,235,246)' height='300px'>
    <Heading mt={100}> project description Box</Heading>
    </Box>
    <Box bg='rgb(199,235,246)' height='300px' mt={70}>
        <Heading mt={50}>Project -2</Heading>
        <Heading mt={100}> project image  Box</Heading>
      </Box>
    <Box bg='rgb(199,235,246)' height='300px' mt={70}>
    <Heading mt={100}> project description Box</Heading>
    </Box>
  </SimpleGrid>
     
    </>
  )
}

export default Project