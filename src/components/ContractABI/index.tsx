import { ABIFunction, Preset } from "@/lib/types";
import {
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ABIObject } from "./ABIObject";

interface ContractABIProps {
  abi: Preset;
}

const ContractABI = ({ abi }: ContractABIProps) => {
  if (!abi) {
    return <Box></Box>;
  }

  const id = abi.id;
  const name = abi.name;

  const jsonABI = abi.interface;

  const ABIDisplay = (
    <Stack spacing={1} w="full" maxW="2xl" mx="auto">
      {jsonABI &&
        jsonABI.length > 0 &&
        jsonABI.map((el: ABIFunction, i: number) => (
          <Box key={i} p={1}>
            <ABIObject obj={el} />
          </Box>
        ))}
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

export default ContractABI;
