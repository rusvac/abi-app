import { ABIFunction, ABIFunctionType } from "@/lib/types";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  useColorModeValue as mode,
} from "@chakra-ui/react";

interface ABIObjectProps {
  obj: ABIFunction;
}

export const ABIObject = ({ obj }: ABIObjectProps) => {
  const name = obj.name;
  const objType = obj.type;

  const mutate = obj.stateMutability;

  const inputs = obj.inputs;
  const outputs = obj.outputs;

  const isEvent = obj.type == ABIFunctionType.event;
  const isReadOnly = obj.constant;

  return (
    <Card variant="outline" w="full">
      <CardHeader bg={mode("gray.100", "gray.700")} rounded="md" p={1}>
        <Flex w="full" justifyContent={"space-between"}>
          <Box>{name}</Box>
          <Box>{obj.type}</Box>
        </Flex>
      </CardHeader>
      <CardBody p={1}>
        <Box>
          {inputs && inputs.length > 0 && (
            <Box w="full">
              {!isEvent && <Box mr={1}>{"inputs"}</Box>}
              {inputs.map((el, i) => (
                <Flex key={i} pl={2} mr={2}>
                  <Badge mt={1} h="fit-content" colorScheme="orange">
                    {el.type}
                  </Badge>
                  <Box px={2}>{el.name}</Box>
                </Flex>
              ))}
            </Box>
          )}
        </Box>
        <Box>
          {outputs && outputs.length > 0 && (
            <Box w="full">
              {!isEvent && <Box mr={1}>{"outputs"}</Box>}
              {outputs.map((el, i) => (
                <Flex key={i} pl={2} mr={2}>
                  <Badge mt={1} h="fit-content" colorScheme="orange">
                    {el.type}
                  </Badge>
                  <Box px={2}>{el.name}</Box>
                </Flex>
              ))}
            </Box>
          )}
        </Box>
      </CardBody>
    </Card>
  );
};
