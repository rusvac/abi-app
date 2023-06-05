import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/skel/Hero";
import { Container } from "../components/skel/Container";
import { Main } from "../components/skel/Main";
import { DarkModeSwitch } from "../components/skel/DarkModeSwitch";
import { CTA } from "../components/skel/CTA";
import { Footer } from "../components/skel/Footer";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <CTA />

    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Heading fontSize="md" fontFamily="DM Sans">
        {"contact: hello@abi.lol"}
      </Heading>
    </Flex>
    <DarkModeSwitch />
  </Container>
);

export default Index;
