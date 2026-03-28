'use client';

import {
  Box,
  Button,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  useColorModeValue as mode,
  Flex,
  Text,
  Kbd,
} from "@chakra-ui/react";

import { abis } from "@/lib/abis";
import { Preset } from "@/lib/types";

interface PresetsMenuProps {
  menuRef: React.RefObject<HTMLButtonElement | null>;
  addABITab: (args: { abi: Preset }) => void;
  addPasteTab: () => void;
}

const PresetsMenu = ({ menuRef, addABITab, addPasteTab }: PresetsMenuProps) => {
  return (
    <ChakraMenu>
      <MenuButton
        as={Button}
        ref={menuRef}
        size="sm"
        fontWeight="normal"
        rounded="none"
        py={1}
        bg={mode("gray.200", "gray.700")}
        _hover={{
          bg: mode("gray.300", "gray.600"),
        }}
        _selected={{
          bg: mode("gray.200", "gray.600"),
        }}
      >
        📄
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
        <MenuDivider />
        <MenuGroup>
          <Flex justifyContent="space-between">
            <Box />
            <Flex px={4}>
              <Box pr={2}>
                <Text>open with </Text>
              </Box>
              <Flex>
                <Box pr={1}>
                  <Kbd>shift</Kbd>
                </Box>
                <Text>+</Text>
                <Box pl={1}>
                  <Kbd>p</Kbd>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </MenuGroup>
      </MenuList>
    </ChakraMenu>
  );
};

export default PresetsMenu;
