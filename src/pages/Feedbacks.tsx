import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { PageProps } from '../models'
import { BiTrophy, BiBadgeCheck, BiSupport } from 'react-icons/bi'
import { FeedbackItem } from '../components/FeedbackItem'

export function FeedbacksPage({ id }: PageProps) {
  
  return (
    <Flex 
      direction="column"
      w="100%"
      py={["10", "16"]}
      px={["2", "24"]}
      align="center" 
      justify="center"
      id={id}
      bgColor="gray.800"
    >
      <Heading mb={["4", "10"]} letterSpacing="0.25rem" textAlign="center">FEEDBACK DOS CLIENTES</Heading>

      <Flex
        w="100%"
        maxW="1160px"
        px={["2", "16"]}
        py={["4", "10"]}
        direction={["column", "row"]}
        align="center"
        justify="space-between"
      >
        <FeedbackItem icon={BiTrophy} title={"Alta qualidade"} description={"Criado com materiais de excelência"} />
        <FeedbackItem icon={BiBadgeCheck} title={"Garantia"} description={"2 anos de garantia"} />
        <FeedbackItem icon={BiSupport} title={"Suporte"} description={"Assistência dedicada"} />     
      </Flex>

      <Box w={["100%", "650px"]} h={["250px", "300px"]} backgroundColor="gray.500" />
    </Flex>
  )
}