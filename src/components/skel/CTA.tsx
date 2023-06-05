import { Box, Flex, Link as ChakraLink, Button } from "@chakra-ui/react";

import { Container } from "./Container";

export const CTA = () => (
  <Box w="full" px={5} pt={10} pb={5}>
    <Flex
      w="full"
      maxW="2xl"
      mx="auto"
      flexDir={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Button
        as={ChakraLink}
        href="./samp"
        variant="solid"
        colorScheme="green"
        rounded="button"
        flexGrow={3}
        width="full"
        mb={1}
        fontFamily="DM Sans"
      >
        {"✨ Open App"}
      </Button>
      <Button
        as={ChakraLink}
        isExternal
        href="https://github.com/rusvac/ability"
        variant="outline"
        rounded="button"
        flexGrow={1}
        width="full"
        mb={1}
        fontFamily="DM Sans"
      >
        {"📝 Github Repo"}
      </Button>
    </Flex>
  </Box>
);
