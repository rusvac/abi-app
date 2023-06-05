import {
  Box,
  Button,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { abis } from "@/lib/abis";

const PresetsMenu = ({ addABITab, addPasteTab }: any) => {
  return (
    <ChakraMenu>
      <MenuButton
        as={Button}
        size="sm"
        fontWeight="normal"
        roundedTop="none"
        roundedBottomLeft="none"
        py={1}
        bg={mode("gray.200", "gray.700")}
        _hover={{
          bg: mode("gray.300", "gray.600"),
        }}
        _selected={{
          bg: mode("gray.200", "gray.600"),
        }}
      >
        P
      </MenuButton>
      <MenuList>
        <MenuItem onClick={addPasteTab}>{`📝 paste in json`}</MenuItem>
        <MenuDivider />
        <MenuGroup title="presets">
          {abis.map((abi, i) => (
            <Box key={i}>
              <MenuItem w="full" onClick={() => addABITab({ abi })}>
                {abi.name}
              </MenuItem>
            </Box>
          ))}
        </MenuGroup>
      </MenuList>
    </ChakraMenu>
  );
};

export default PresetsMenu;
