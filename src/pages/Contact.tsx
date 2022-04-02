import { Box, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import { InputField } from '../components/Input'
import { PageProps } from '../models'

export function ContactPage({ id }: PageProps) {
  
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
      <Heading mb={["2", "10"]} letterSpacing="0.25rem">ENTRE EM CONTATO</Heading>
      <Flex
        w="100%"
        maxW="1160px"
        px={["2", "16"]}
        py={["4", "10"]}
        direction={["column", "row"]}
        align="center"
        justify="space-between"
      >
        <Box>
          <InputField type="tel" placeholder='Telefone'/>
          <InputField type="tel" placeholder='Telefone'/>
          <InputField type="tel" placeholder='Telefone'/>
        </Box>

        <Box>
        <InputField type="tel" placeholder='Telefone'/>
        <InputField type="tel" placeholder='Telefone'/>
        <InputField type="tel" placeholder='Telefone'/>
        </Box>
      </Flex>
    </Flex>
  )
}