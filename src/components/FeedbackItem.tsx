import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FeedbackProps } from "../models";

export function FeedbackItem({ icon, title, description }: FeedbackProps) {
  return (
    <Flex align="center" w={["100%", "auto"]} justify="center" direction={["column", "row"]}>
      <Icon as={icon} h={["8", "12"]} w={["8", "12"]} mr={["0", "3"]} mt={["6", "0"]} />

      <Box textAlign={["center", "left"]}>
        <Text fontSize="xl" fontWeight="bold">{title}</Text>
        <Text fontSize="sm" fontWeight="normal" color="gray.300">{description}</Text>
      </Box>
    </Flex>
  )
}