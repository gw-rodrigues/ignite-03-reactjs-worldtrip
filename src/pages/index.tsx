import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex w="100vw" height="100vh" align="center" flexDirection="column">
      <Header />
      <Flex w="100%" my="6" maxWidth={1440} mx="auto" px="6">
        <h1>1231</h1>
      </Flex>
    </Flex>
  );
}
