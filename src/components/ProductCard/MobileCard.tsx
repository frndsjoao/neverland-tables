import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

export function MobileCard() {
  return (
    <Accordion w="100%" bgColor="gray.50" color="gray.900" borderRadius="md" border="none" my="1" allowToggle allowMultiple={false}>
      <AccordionItem>
        <AccordionButton >
          <Box flex="1" textAlign="left">Categoria</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}