import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { PageProps } from '../models'

export function AboutPage({ id }: PageProps) {
  
  return (
    <Flex 
      direction="column"
      w="100%"
      py={["10", "16"]}
      px={["2", "24"]}
      pb={["10", "12"]}
      align="center" 
      justify="center"
      id={id}
    >
      <Heading mb={["2", "10"]} letterSpacing="0.25rem">SOBRE NÓS</Heading>
      <Flex
        w="100%"
        maxW="1160px"
        px={["2", "16"]}
        py={["4", "10"]}
        direction={["column", "row"]}
        align="center"
        justify="space-between"
      >
        <Box
          flex="1"
          px={["2", "12"]}
          mb="4"
        >
          <Text 
            textAlign="center" 
            fontSize={["1rem", "1.25rem"]} 
            letterSpacing="0.1rem" 
            mt={["6", "4"]}

          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui 
            blanditiis praesentium voluptatum deleniti atque corrupti quos 
            dolores et quas molestias excepturi sint occaecati cupiditate 
            non provident, similique sunt in culpa qui officia deserunt mollitia 
            animi, id est laborum et dolorum fuga.
          </Text>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="mesa lúdica Neverland"
          fallbackSrc="https://via.placeholder.com"
          h={["250px", "350px"]}
          w={["100%", "500px"]}
          objectFit="cover"
          borderRadius="md"
          boxShadow='dark-lg'
        />

      </Flex>
    </Flex>
  )
}