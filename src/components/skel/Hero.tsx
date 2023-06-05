import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export const Hero = () => (
  <Box>
    <Flex
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
      py={10}
    >
      <Flex>
        <Heading
          fontSize={{ base: "3xl", sm: "6xl" }}
          mr={1}
          fontFamily="DM Sans"
        >
          {"abi"}
        </Heading>
        <Text
          color={useColorModeValue("black", "white")}
          fontSize={{ base: "3xl", sm: "6xl" }}
          fontFamily="DM Sans"
          mr={1}
        >
          .
        </Text>
        <Heading fontSize={{ base: "3xl", sm: "6xl" }} fontFamily="DM Sans">
          {"lol"}
        </Heading>
      </Flex>
    </Flex>
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Heading fontSize="xl" fontFamily="DM Sans">
        {"Read Smart Contract ABI as Documentation"}
      </Heading>
    </Flex>
  </Box>
);
