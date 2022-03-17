import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'
import { PageProps } from '../models'

export function ProductsPage({ id }: PageProps) {  
  return (
    <Flex 
      direction="column"
      w="100%"
      py={["10", "20"]}
      px={["2", "24"]}
      align="center" 
      justify="center"
      id={id}
      bgColor="gray.800"
    >
      <Heading mb={["4", "10"]} letterSpacing="0.25rem">NOSSOS PRODUTOS</Heading>
      <Flex
        w="100%"
        maxW="1160px"
        px={["2", "16"]}
        py={["4", "12"]}
        direction={["column", "row"]}
        align="center"
        justify="space-between"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </Flex>
    </Flex>
  )
}