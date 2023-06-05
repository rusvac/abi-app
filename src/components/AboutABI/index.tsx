import {
  Link,
  Text,
  Box,
  Code,
  Flex,
  useColorModeValue as mode,
  Textarea,
  Button,
  Card,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

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
              <Text fontFamily="DM Sans">app contact 👋</Text>
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
              <Text fontFamily="DM Sans">created w/🧡 by </Text>
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

{
  /* <Box>
<Box>
  <Text fontSize="xl">Common ABIs</Text>
</Box>
{abis.map((el, i) => (
  <Box key={i} p={1}>
    <Button w="full" onClick={() => usePresetABI(el)}>
      {el.name}
    </Button>
  </Box>
))}
</Box> */
}
