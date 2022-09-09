import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const Skills = () => {
  return (
    <>
      <Heading textAlign='left' mt={100} ml={150}>skills</Heading>
    <SimpleGrid columns={[2,3, 4]} spacing='40px' width='80%' margin='auto' mt={50}>
 
 <Box bg='rgb(255,240,245)' height='200px'>
   <Heading mt={70}> skill-1</Heading>
 </Box>
<Box bg='rgb(255,240,245)' height='200px'>
<Heading mt={70}> skill-2</Heading>
</Box>
 <Box bg='rgb(255,240,245)' height='200px'>
   <Heading mt={70}> skill-3</Heading>
 </Box>
<Box bg='rgb(255,240,245)' height='200px'>
<Heading mt={70}> skill-4</Heading>
</Box>
 <Box bg='rgb(255,240,245)' height='200px'>
   <Heading mt={70}> skill-5</Heading>
 </Box>
<Box bg='rgb(255,240,245)' height='200px'>
<Heading mt={70}> skill-6</Heading>
</Box>
 <Box bg='rgb(255,240,245)' height='200px'>
   <Heading mt={70}> skill-7</Heading>
 </Box>
<Box bg='rgb(255,240,245)' height='200px'>
<Heading mt={70}> skill-8</Heading>
</Box>



</SimpleGrid>
    </>
  )
}

export default Skills