import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <Flex w="100%" height="99vh" flexDirection="column" margin="auto">
      <Header continent="home" />
      <Box w="100%" h="368.21px" position="relative">
        <Flex
          flexDir="column"
          w="100%"
          h="335px"
          bg="#fff 10% 25% url('/sky.jpeg') no-repeat"
          bgSize="cover"
          justifyContent="center"
          alignContent="center"
        >
          <Stack m="auto" w="100%" maxW={1440} position="relative">
            <Box maxW="524px" marginLeft="8.75rem">
              <Text
                fontWeight="500"
                fontSize="36px"
                lineHeight="54px"
                color="gray.50"
              >
                5 Continentes, infinitas possibilidades.
              </Text>
              <Text
                fontWeight="400"
                fontSize="20px"
                lineHeight="30px"
                marginTop="1.25rem"
                color="gray.300"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>
            <Image
              position="absolute"
              bottom="-110.21px"
              right="8.75rem"
              src="/airplane.png"
              alt="Banner home"
            />
          </Stack>
        </Flex>
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

      <Carousel />
    </Flex>
  );
}
