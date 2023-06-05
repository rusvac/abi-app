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

import React, { useState } from "react";
import SelectABI from "@/comp/SelectABI";
import Menu from "@/comp/Menu";

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
      roundedTop="none"
      py={1}
      bg={mode("gray.300", "gray.700")}
      _hover={{
        bg: mode("gray.200", "gray.600"),
      }}
      _selected={{
        bg: mode("gray.200", "gray.600"),
      }}
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

const emptyTab = { title: "Empty ABI", content: undefined };

const Samples = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tabs, setTabs] = useState<any[]>([emptyTab]);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const addABI = (ABI) => {
    setTabs([...tabs, { title: ABI.id, content: ABI }]);
    handleTabsChange(tabs.length);
  };

  const addEmptyTab = () => {
    setTabs([...tabs, emptyTab]);
    handleTabsChange(tabs.length);
  };

  const updateTab = (id, content) => {
    setTabs(
      tabs.map((el, i) => (i == id ? { title: "Pasted ABI", content } : el))
    );
  };

  const closeTab = (id) => {
    let newTabs = [...tabs.filter((el, i) => id != i)];
    if (newTabs.length == 0) {
      newTabs = [emptyTab];
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
        >
          <TabList>
            <Menu addABI={addABI} addEmptyTab={addEmptyTab} />
            {tabs.map((el, i) => (
              <CustomTab key={i} onClear={() => closeTab(i)}>
                {el.title}
              </CustomTab>
            ))}
          </TabList>
          <TabPanels>
            {tabs.map((el, i) => (
              <TabPanel key={i} p={0}>
                {el && el.content && <ContractABI abi={el.content} />}
                {el && !el.content && (
                  <SelectABI tab={i} updateTab={updateTab} />
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Samples;
