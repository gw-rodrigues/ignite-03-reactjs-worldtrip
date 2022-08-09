import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex w="100vw" height="100vh" align="center" flexDirection="column">
      <Header continent="home" />
      <Flex
        w="100%"
        h="368.21px"
        my="6"
        maxWidth={1440}
        mx="auto"
        px="6"
        backgroundImage="/sky.jpeg"
        alignItems="center"
      >
        <Flex flexDir="column" maxW="524px">
          <Text fontWeight="500" fontSize="36px" lineHeight="54px">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            fontWeight="400"
            fontSize="20px"
            lineHeight="30px"
            marginTop="2rem"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image src="/airplane.png" alt="Banner home" />
      </Flex>
    </Flex>
  );
}
