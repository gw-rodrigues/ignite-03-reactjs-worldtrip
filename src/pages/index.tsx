import { Flex, HStack, Image, Text, Divider } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <Flex w="100%" height="99vh" flexDirection="column" margin="auto">
      <Header continent="home" />

      <Banner />

      <HStack
        w="100%"
        maxW={1440}
        my="5rem"
        mx="auto"
        justifyContent="space-evenly"
      >
        <Flex
          flexDir="column"
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image maxW="85px" maxH="85px" src="/cocktail.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="brand.gray-900"
          >
            vida noturna
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image maxW="85px" maxH="85px" src="/surf.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="brand.gray-900"
          >
            praia
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image maxW="85px" maxH="85px" src="/building.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="brand.gray-900"
          >
            moderno
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image maxW="85px" maxH="85px" src="/museum.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="brand.gray-900"
          >
            clássico
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image maxW="85px" maxH="85px" src="/earth.png" alt="cocktail" />
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            marginTop="1.25rem"
            color="brand.gray-900"
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
        borderColor="brand.gray-900"
        borderBottomWidth="3px"
      />
      <Text
        fontWeight="500"
        fontSize="36px"
        lineHeight="54px"
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
