import { ABIFunction, Preset } from "@/lib/types";
import {
  Box,
  Card,
  Flex,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import converter from "./converter";

interface ContractABIProps {
  abi: Preset;
}

const SolidityABI = ({ abi }: ContractABIProps) => {
  if (!abi) {
    return <Box></Box>;
  }

  console.log(abi);

  const id = abi.id;
  const name = abi.name;

  const jsonABI = abi.interface;

  const generated = converter({ json: jsonABI });

  const ABIDisplay = (
    <Stack spacing={1} w="full" maxW="2xl" mx="auto">
      <Card variant="outline" px={1} py={2} w="full">
        <Box fontSize="sm">
          <pre>{generated}</pre>
        </Box>
      </Card>
    </Stack>
  );

  return (
    <Box h="100%">
      <Flex
        h="full"
        maxH="94vh"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar-track": {
            bg: "transparent",
          },
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            bg: mode("blue.600", "gray.700"),
            borderRadius: "20px",
          },
        }}
      >
        <Box w="full" h="fit-content" p={1}>
          {ABIDisplay}
        </Box>
      </Flex>
    </Box>
  );
};

export default SolidityABI;
