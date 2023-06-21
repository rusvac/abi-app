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
  Kbd,
  Flex,
  Text,
} from "@chakra-ui/react";

import { abis } from "@/lib/abis";

const Menu = ({ closure, menuRef, addAboutTab }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraMenu isOpen={closure.isOpen} onClose={closure.onClose}>
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
        onClick={closure.onOpen}
      >
        🔷
      </MenuButton>
      <MenuList>
        <MenuGroup title="abi.lol">
          <MenuItem onClick={toggleColorMode}>
            {colorMode == "light" ? `🌚 dark mode` : `🌞 light mode`}
          </MenuItem>
          <MenuItem onClick={addAboutTab}>{`😵 about abi.lol`}</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="links">
          <MenuItem as={ChakraLink} href="https://abi.lol/">
            {"🏠 homepage ↗"}
          </MenuItem>
          <MenuItem
            as={ChakraLink}
            href="https://github.com/rusvac/abi-app"
            isExternal
          >
            {"🐙 github ↗"}
          </MenuItem>
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
                  <Kbd>m</Kbd>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </MenuGroup>
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
