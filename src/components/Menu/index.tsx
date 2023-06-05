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

const Menu = ({ addABI, addEmptyTab }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraMenu>
      <MenuButton
        as={Button}
        size="sm"
        fontWeight="normal"
        roundedTop="none"
        py={1}
        bg={mode("gray.200", "gray.700")}
        _hover={{
          bg: mode("gray.200", "gray.600"),
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
            {colorMode == "light" ? `🌚 Dark Mode` : `🌞 Light Mode`}
          </MenuItem>
          <MenuItem onClick={addEmptyTab}>{`📝 Paste JSON ABI`}</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Presets">
          {abis.map((el, i) => (
            <Box key={i}>
              <MenuItem w="full" onClick={() => addABI(el)}>
                {el.name}
              </MenuItem>
            </Box>
          ))}
        </MenuGroup>
        <MenuGroup title="Links">
          <MenuItem as={ChakraLink} href="/">
            {"Homepage ↗"}
          </MenuItem>
          <MenuItem
            as={ChakraLink}
            href="https://github.com/rusvac/ability"
            isExternal
          >
            {"Github Repo ↗"}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
