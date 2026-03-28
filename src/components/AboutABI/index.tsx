'use client';

import {
  Link,
  Text,
  Box,
  Card,
  Heading,
  Stack,
  Flex,
} from "@chakra-ui/react";

const AboutABI = () => {
  return (
    <Box>
      <Box p={2}>
        <Card variant="outline" p={1} px={2}>
          <Box>
            <Heading fontFamily="DM Sans">abi.lol</Heading>
          </Box>
          <Box pt={2}>
            <Text>
              This tool helps display JSON ABIs as easily readable
              documentation.
            </Text>
            <Text pt={1}>
              Hit me up if you find it useful or have any suggestions!
            </Text>
          </Box>
          <Box pt={4} mx="auto" w="fit-content"></Box>
          <Stack pt={2} spacing={1}>
            <Flex fontSize="sm">
              <Text fontFamily="DM Sans">app contact</Text>
              <Link
                fontFamily="DM Sans"
                ml={1}
                color="blue.500"
                href="mailto:hello@abi.lol"
              >
                hello@abi.lol
              </Link>
            </Flex>
            <Flex fontSize="sm">
              <Text fontFamily="DM Sans">created by </Text>
              <Link
                fontFamily="DM Sans"
                ml={1}
                color="blue.500"
                href="https://twitter.com/0xJudith"
              >
                GrandmaJudith
              </Link>
            </Flex>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutABI;
