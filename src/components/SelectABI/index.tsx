import {
  Link as ChakraLink,
  Text,
  Box,
  Code,
  Flex,
  useColorModeValue as mode,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const SelectABI = ({ tab, updateTab }: any) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    let newABI = undefined;

    try {
      newABI = JSON.parse(inputValue);
    } catch (error) {}

    if (newABI) {
      updateTab(tab, {
        id: "Pasted",
        name: "Pasted ABI",
        interface: newABI,
      });
      return;
    }

    setValue(inputValue);
  };

  return (
    <Box>
      <Box p={2}>
        <Box>
          <Textarea
            placeholder="Paste in JSON ABI"
            resize={"vertical"}
            value={value}
            onChange={handleInputChange}
            border={"2px dotted"}
            w="full"
            h="95vh"
            minH="90vh"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SelectABI;

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
