import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { PageProps } from '../models'

export function HomePage({ id }: PageProps) {
  return (
    <Flex 
      direction={["column", "row"]}
      w="100%"
      maxW="1440px"
      py={["10", "20"]}
      px={["2", "24"]}
      align="center" 
      justify="space-evenly"
      id={id}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={["2", "6"]}
      >
        <Heading 
          textAlign="center" 
          fontSize={["2rem", "2.5rem"]} 
          lineHeight={["2.5rem", "3.5rem"]} 
          letterSpacing="0.25rem"
        >
          Mesas lúdicas<br />para board game
        </Heading>
        <Text textAlign="center" fontSize={["1rem", "1.25rem"]} letterSpacing="0.15rem" mt={["6", "4"]}>Feitas sob medida!</Text>
        <Button 
          mt={["8", "12"]}
          mb={["10", "0"]}
          size="lg" 
          variant="outline" 
          _hover={{
            background: "blue.500",
            color: "white",
            border: "none"
          }}
        >
          Solicite um orçamento
        </Button>
      </Flex>
      <Image
        src="https://images.unsplash.com/photo-1559051668-934cd674493c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        alt="mesa lúdica Neverland"
        fallbackSrc="https://via.placeholder.com"
        h={["250px", "400px"]}
        w={["100%", "525px"]}
        objectFit="cover"
        borderRadius="md"
        boxShadow='dark-lg'
      />
    </Flex>
  )
}