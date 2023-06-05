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

const Menu = ({ addAboutTab }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraMenu>
      <MenuButton
        as={Button}
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
        =
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
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
