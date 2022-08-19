import {
  Flex,
  HStack,
  Image,
  Text,
  Divider,
  ListIcon,
  Box,
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Banner } from "../components/Banner";
import { Trip } from "../components/Trip";

export default function Home() {
  return (
    <Flex height="100vh" direction="column">
      <Header continent="home" />

      <Banner />

      <HStack
        w="100%"
        maxW={1160}
        my={[9, 16, 20]}
        mx={"auto"}
        px={{ base: 4, md: 2 }}
        justifyContent={{ base: "center", md: "space-between" }}
        wrap="wrap"
        gap={[9, 12, 4]}
      >
        <Trip icon="cocktail" title="vida noturna" />
        <Trip icon="surf" title="praia" />
        <Trip icon="building" title="moderno" />
        <Trip icon="museum" title="clássico" />
        <Trip icon="earth" title="e mais..." />
      </HStack>

      <Divider
        w={90}
        h={0}
        mx="auto"
        opacity="1"
        borderColor="brand.gray-900"
        borderBottomWidth="3px"
      />
      <Text
        fontWeight="medium"
        fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        lineHeight={{ base: "1.875rem", sm: "2.5rem", md: "3.375rem" }}
        color="brand.gray-900"
        mx="auto"
        my="3.25rem"
        maxW={839}
        textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>

      <Carousel />
    </Flex>
  );
}
