'use client';

import {
  Box,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { Preset } from "@/lib/types";

interface SelectABIProps {
  tab: number;
  updateTab: (id: number, content: Preset) => void;
}

const SelectABI = ({ tab, updateTab }: SelectABIProps) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    let newABI = undefined;

    try {
      newABI = JSON.parse(inputValue);
    } catch {}

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
