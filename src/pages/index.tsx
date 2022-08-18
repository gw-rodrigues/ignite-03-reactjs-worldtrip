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
        <Flex
          direction={{ sm: "row", md: "column" }}
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image
            maxW="85px"
            maxH="85px"
            src="/cocktail.png"
            alt="cocktail"
            display={{ md: "block", base: "none" }}
          />
          <Box
            w={2}
            h={2}
            borderRadius={50}
            backgroundColor="brand.yellow-550"
            display={{ base: "block", md: "none" }}
          ></Box>
          <Text
            fontWeight="semibold"
            fontSize={{ sm: "lg", md: "2xl" }}
            lineHeight={{ sm: "tall", md: 9 }}
            marginTop={{ sm: 0, md: "1.25rem" }}
            color="brand.gray-900"
            ml={{ base: 2, md: 0 }}
          >
            vida noturna
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "row", md: "column" }}
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image
            maxW="85px"
            maxH="85px"
            src="/surf.png"
            alt="cocktail"
            display={{ md: "block", base: "none" }}
          />
          <Box
            w={2}
            h={2}
            borderRadius={50}
            backgroundColor="brand.yellow-550"
            display={{ base: "block", md: "none" }}
          ></Box>
          <Text
            fontWeight="semibold"
            fontSize={{ sm: "lg", md: "2xl" }}
            lineHeight={{ sm: "tall", md: 9 }}
            marginTop={{ sm: 0, md: "1.25rem" }}
            ml={{ base: 2, md: 0 }}
            color="brand.gray-900"
          >
            praia
          </Text>
        </Flex>

        <Flex
          direction={{ sm: "row", md: "column" }}
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image
            maxW="85px"
            maxH="85px"
            src="/building.png"
            alt="cocktail"
            display={{ md: "block", base: "none" }}
          />
          <Box
            w={2}
            h={2}
            borderRadius={50}
            backgroundColor="brand.yellow-550"
            display={{ base: "block", md: "none" }}
          ></Box>
          <Text
            fontWeight="semibold"
            fontSize={{ sm: "lg", md: "2xl" }}
            lineHeight={{ sm: "tall", md: 9 }}
            marginTop={{ sm: 0, md: "1.25rem" }}
            ml={{ base: 2, md: 0 }}
            color="brand.gray-900"
          >
            moderno
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "row", md: "column" }}
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image
            maxW="85px"
            maxH="85px"
            src="/museum.png"
            alt="cocktail"
            display={{ md: "block", base: "none" }}
          />
          <Box
            w={2}
            h={2}
            borderRadius={50}
            backgroundColor="brand.yellow-550"
            display={{ base: "block", md: "none" }}
          ></Box>
          <Text
            fontWeight="semibold"
            fontSize={{ sm: "lg", md: "2xl" }}
            lineHeight={{ sm: "tall", md: 9 }}
            marginTop={{ sm: 0, md: "1.25rem" }}
            ml={{ base: 2, md: 0 }}
            color="brand.gray-900"
          >
            clássico
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "row", md: "column" }}
          alignItems="center"
          transition="filter .2s"
          _hover={{ filter: "brightness(.8)" }}
        >
          <Image
            maxW="85px"
            maxH="85px"
            src="/earth.png"
            alt="cocktail"
            display={{ md: "block", base: "none" }}
          />
          <Box
            w={2}
            h={2}
            borderRadius={50}
            backgroundColor="brand.yellow-550"
            display={{ base: "block", md: "none" }}
          ></Box>
          <Text
            fontWeight="semibold"
            fontSize={{ sm: "lg", md: "2xl" }}
            lineHeight={{ sm: "tall", md: 9 }}
            marginTop={{ sm: 0, md: "1.25rem" }}
            ml={{ base: 2, md: 0 }}
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
