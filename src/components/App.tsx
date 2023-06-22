import {
  Link as ChakraLink,
  Text,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
  Button,
  useColorModeValue as mode,
  useTab,
  useMultiStyleConfig,
  useDisclosure,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

import { Container } from "../components/skel/Container";
import ContractABI from "../components/ContractABI";

import React, { useCallback, useEffect, useRef, useState } from "react";
import SelectABI from "./SelectABI";
import Menu from "./Menu";
import PresetsMenu from "./Presets";
import AboutABI from "./AboutABI";
import SolidityABI from "./SolidityABI";

interface AppTab {
  title: string;

  type: "abi" | "paste" | "about";

  content: any;
}

const pasteTab: AppTab = {
  title: "JSON ABI",
  content: undefined,
  type: "paste",
};
const aboutTab: AppTab = { title: "ABI.LOL", content: "hello", type: "about" };

const baseConfig = {
  abiMode: "docs",
};

const CustomTab = React.forwardRef((props: any, ref) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig("Tabs", tabProps);

  const normalizedProps: any = { ...tabProps };

  return (
    <Button
      {...tabProps}
      size="sm"
      fontWeight="normal"
      rounded="none"
      py={1}
      bg={mode("gray.300", "gray.700")}
      _hover={{
        bg: mode("gray.200", "gray.600"),
      }}
      _selected={{
        bg: mode("gray.200", "gray.600"),
      }}
      w="fit-content"
    >
      <Box>{tabProps.children}</Box>
      {isSelected && normalizedProps.onClear ? (
        <Box px={1} onClick={normalizedProps.onClear}>
          <SmallCloseIcon />
        </Box>
      ) : (
        <></>
      )}
    </Button>
  );
});

const DisplayABI = ({ config, abi }: any) => {
  const { abiMode } = config;

  const { content } = abi;

  return (
    <>
      {abiMode === "docs" && <ContractABI abi={content} />}
      {abiMode === "sold" && <SolidityABI abi={content} />}
    </>
  );
};

const AbiApp = () => {
  const [config, setConfig] = useState<any>({ ...baseConfig });
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tabs, setTabs] = useState<Array<AppTab>>([pasteTab]);

  const menuRef = useRef(null);
  const presetRef = useRef(null);

  const mainMenu = useDisclosure();
  const presetMenu = useDisclosure();

  const handleKeyPress = useCallback((event: any) => {
    if (event.shiftKey === true) {
      if (event.key === "M") {
        event.preventDefault();
        menuRef.current.focus();
        mainMenu.onOpen();
      }
      if (event.key === "P") {
        event.preventDefault();
        presetRef.current.focus();
        presetMenu.onOpen();
      }

      console.log(`Key pressed: ${event.key}`);
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const addPasteTab = () => {
    setTabs([...tabs, pasteTab]);
    handleTabsChange(tabs.length);
  };

  const addAboutTab = () => {
    setTabs([...tabs, aboutTab]);
    handleTabsChange(tabs.length);
  };

  const addABITab = ({ abi }) => {
    const newTab: AppTab = {
      title: abi.name,
      content: abi,
      type: "abi",
    };
    setTabs([...tabs, newTab]);
    handleTabsChange(tabs.length);
  };

  const updateTab = (id, content) => {
    const newTab: AppTab = {
      title: "Pasted ABI",
      type: "abi",
      content,
    };
    const newTabs: Array<AppTab> = tabs.map((tab, i) => ({
      ...tab,
      ...(i == id ? newTab : {}),
    }));
    setTabs(newTabs);
  };

  const closeTab = (id) => {
    let newTabs = [...tabs.filter((el, i) => id != i)];
    if (newTabs.length == 0) {
      newTabs = [pasteTab];
    }
    setTabs(newTabs);
  };

  return (
    <Container>
      <Box w="full" h="full">
        <Tabs
          variant="soft-rounded"
          colorScheme="gray"
          index={tabIndex}
          onChange={handleTabsChange}
          maxW="100vw"
          overflowX="hidden"
        >
          <Flex overflowX="auto">
            <TabList w="fit-content">
              <Menu
                closure={mainMenu}
                menuRef={menuRef}
                addAboutTab={addAboutTab}
                config={config}
                setConfig={(e) =>
                  setConfig({
                    ...config,
                    ...e,
                  })
                }
              />
              <PresetsMenu
                closure={presetMenu}
                menuRef={presetRef}
                addABITab={addABITab}
                addPasteTab={addPasteTab}
              />
              {tabs.map((el, i) => (
                <CustomTab key={i} onClear={() => closeTab(i)}>
                  {el.title}
                </CustomTab>
              ))}
            </TabList>
          </Flex>
          <TabPanels>
            {tabs.map((el, i) => (
              <TabPanel key={i} p={0}>
                {el?.type == "abi" && <DisplayABI abi={el} config={config} />}
                {el?.type == "paste" && (
                  <SelectABI tab={i} updateTab={updateTab} />
                )}
                {el?.type == "about" && <AboutABI />}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default AbiApp;
