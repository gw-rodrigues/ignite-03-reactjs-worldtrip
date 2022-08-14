/*
- América do Norte;
- América do Sul;
- Ásia;
- África;
- Europa;
- Oceania.
*/

import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { Header } from "../components/Header";

export default function Continents({ continent }) {
  return (
    <VStack w="100%" height="99vh" margin="auto">
      <Header continent="home" />

      <Box
        flexDir="column"
        w="100%"
        h="500px"
        bg="#fff 10% 25% url('/banner-page/europe.jpeg') no-repeat"
        bgSize="cover"
        justifyContent="center"
        alignContent="center"
        position="relative"
      >
        <Text
          fontWeight="500"
          fontSize="36px"
          lineHeight="54px"
          color="gray.50"
          position="absolute"
          bottom="3.68rem"
          left="8.75rem"
        >
          {continent}
        </Text>
      </Box>
      <HStack
        w="100%"
        maxW={1440}
        my="5rem"
        mx="auto"
        justifyContent="space-evenly"
      >
        <Flex flexDir="column" alignItems="center">
          <Image maxW="85px" maxH="85px" src="/cocktail.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="gray.900"
          >
            vida noturna
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Image maxW="85px" maxH="85px" src="/surf.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="gray.900"
          >
            praia
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Image maxW="85px" maxH="85px" src="/building.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="gray.900"
          >
            moderno
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Image maxW="85px" maxH="85px" src="/museum.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="gray.900"
          >
            clássico
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Image maxW="85px" maxH="85px" src="/earth.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="gray.900"
          >
            e mais...
          </Text>
        </Flex>
      </HStack>
      <Divider
        w={90}
        h={0}
        mx="auto"
        opacity="1"
        borderColor="gray.900"
        borderBottomWidth="3px"
      />
      <Text
        fontWeight="500"
        fontSize="36px"
        lineHeight="54px"
        color="gray.900"
        mx="auto"
        my="3.25rem"
        maxW={839}
        textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
    </VStack>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let { slug } = params;

  switch (slug) {
    case "europe":
      slug = "Europe";
      break;

    default:
      slug = "404";
      break;
  }

  return { props: { continent: slug } };
};
