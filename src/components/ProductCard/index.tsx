import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function ProductCard() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      {!isWideVersion ? (
        <Accordion w="100%" bgColor="gray.50" color="gray.900" borderRadius="md" border="none" my="1" allowToggle allowMultiple={false}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Categoria</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Flex
          position="relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1615920606214-6428b3324c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Mesa lúdica com descrição de categoria"
            w="240px"
            h="300px"
            objectFit="cover"
            position="relative"
            borderRadius="sm"
            boxShadow='dark-lg'
            filter="brightness(70%)"
            transition="all 0.2s ease-in-out"
            _hover={{
              filter: 'brightness(90%)'
            }}
          />
          <Box 
            bgColor="gray.50"
            w="200px"
            h="100px"
            position="absolute"
            bottom="-20px"
            right="20px"
            borderRadius="md"
            boxShadow='dark-lg'
            p="2"
          >
            <Text 
              color="gray.800"
              fontWeight="bold"
              textAlign="center"
              fontSize="1rem"
              mb="2"
            >
              Categoria
            </Text>
            <Text 
              color="gray.600"
              textAlign="center"
              fontSize="0.75rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Flex>
      )}
    </>
  )
}