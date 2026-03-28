'use client';

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
import { Preset } from "@/lib/types";

interface AppTab {
  title: string;
  type: "abi" | "paste" | "about";
  content?: Preset;
}

interface AppConfig {
  abiMode: string;
}

const pasteTab: AppTab = {
  title: "JSON ABI",
  content: undefined,
  type: "paste",
};
const aboutTab: AppTab = { title: "ABI.LOL", content: undefined, type: "about" };

const baseConfig: AppConfig = {
  abiMode: "docs",
};

interface CustomTabProps {
  onClear?: () => void;
  children?: React.ReactNode;
}

const CustomTab = React.forwardRef<HTMLButtonElement, CustomTabProps>((props, ref) => {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  const styles = useMultiStyleConfig("Tabs", tabProps);

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
      {isSelected && props.onClear ? (
        <Box px={1} onClick={props.onClear}>
          <SmallCloseIcon />
        </Box>
      ) : (
        <></>
      )}
    </Button>
  );
});

CustomTab.displayName = "CustomTab";

interface DisplayABIProps {
  config: AppConfig;
  abi: AppTab;
}

const DisplayABI = ({ config, abi }: DisplayABIProps) => {
  const { abiMode } = config;
  const { content } = abi;

  return (
    <>
      {abiMode === "docs" && content && <ContractABI abi={content} />}
      {abiMode === "sold" && content && <SolidityABI abi={content} />}
    </>
  );
};

const AbiApp = () => {
  const [config, setConfig] = useState<AppConfig>({ ...baseConfig });
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tabs, setTabs] = useState<AppTab[]>([pasteTab]);

  const menuRef = useRef<HTMLButtonElement>(null);
  const presetRef = useRef<HTMLButtonElement>(null);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.shiftKey === true) {
      if (event.key === "M") {
        event.preventDefault();
        menuRef.current?.click();
      }
      if (event.key === "P") {
        event.preventDefault();
        presetRef.current?.click();
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleTabsChange = (index: number) => {
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

  const addABITab = ({ abi }: { abi: Preset }) => {
    const newTab: AppTab = {
      title: abi.name,
      content: abi,
      type: "abi",
    };
    setTabs([...tabs, newTab]);
    handleTabsChange(tabs.length);
  };

  const updateTab = (id: number, content: Preset) => {
    const newTab: AppTab = {
      title: "Pasted ABI",
      type: "abi",
      content,
    };
    const newTabs: AppTab[] = tabs.map((tab, i) => ({
      ...tab,
      ...(i == id ? newTab : {}),
    }));
    setTabs(newTabs);
  };

  const closeTab = (id: number) => {
    let newTabs = [...tabs.filter((_el, i) => id != i)];
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
                menuRef={menuRef}
                addAboutTab={addAboutTab}
                config={config}
                setConfig={(e: Partial<AppConfig>) =>
                  setConfig({
                    ...config,
                    ...e,
                  })
                }
              />
              <PresetsMenu
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
