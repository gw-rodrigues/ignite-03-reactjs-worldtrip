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
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { Header } from "../components/Header";

import { CircleFlag } from "react-circle-flags";

interface ContinentProps {
  slug: string | string[];
  title: string;
  description: string;
  totalCountries: string;
  totalLanguages: string;
  totalCities: string;
  data: {
    city: string;
    country: string;
    image: string;
    flag: string;
  }[];
}

export default function Continent({
  slug,
  title,
  description,
  totalCountries,
  totalLanguages,
  totalCities,
  data,
}: ContinentProps): JSX.Element {
  return (
    <VStack w="100%" height="99vh" margin="auto">
      <Header continent={String(slug)} />

      <Box
        flexDir="column"
        w="100%"
        minH="500px"
        bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner-page/europe.jpeg') center no-repeat"
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
          left="8.75%"
        >
          {title}
        </Text>
      </Box>

      <HStack
        py="5rem"
        mx="auto"
        gap={70}
        flexWrap="wrap"
        justifyContent="space-between"
        w="100%"
        maxW={1160}
        px={[6, 0]}
      >
        <Text
          maxW={600}
          fontWeight="400"
          fontSize="24px"
          lineHeight="36px"
          textAlign="justify"
        >
          {description}
        </Text>
        <HStack gap={42} flexWrap="wrap" justifyContent="center">
          <VStack textAlign="center">
            <Text
              fontWeight="600"
              fontSize="48px"
              lineHeight="72px"
              color="brand.yellow-550"
            >
              {totalCountries}
            </Text>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="36px"
              color="brand.gray-900"
            >
              países
            </Text>
          </VStack>
          <VStack>
            <Text
              fontWeight="600"
              fontSize="48px"
              lineHeight="72px"
              color="brand.yellow-550"
            >
              {totalLanguages}
            </Text>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="36px"
              color="brand.gray-900"
            >
              línguas
            </Text>
          </VStack>
          <VStack>
            <Text
              fontWeight="600"
              fontSize="48px"
              lineHeight="72px"
              color="brand.yellow-550"
            >
              {totalCities}
            </Text>
            <HStack>
              <Text
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                color="brand.gray-900"
                gap="8px"
              >
                cidades +100
              </Text>
              <Tooltip label="Quantidade de cidades que tem este continente.">
                <Text
                  display="inline-block"
                  flex="1 0 16px"
                  w="16px"
                  h="16px"
                  fontSize="10px"
                  lineHeight="12px"
                  color="brand.gray-400"
                  borderColor="brand.gray-900"
                  border="3px solid"
                  borderRadius="50"
                  textAlign="center"
                  opacity=".5"
                >
                  i
                </Text>
              </Tooltip>
            </HStack>
          </VStack>
        </HStack>
      </HStack>
      <VStack alignItems="start" maxW={1160}>
        <Text fontWeight="500" fontSize="36px" lineHeight="54px">
          Cidade +100
        </Text>
        <Flex
          flexWrap="wrap"
          gap="45px"
          py="40px"
          width="100%"
          justifyItems="start"
        >
          {data.map((continent) => (
            <Box
              key={continent.country}
              w="256px"
              h=" 279px"
              border="1px solid"
              borderColor="brand.yellow-550"
              borderRadius="4px"
              bg="white"
              overflow="hidden"
            >
              <Flex
                w="100%"
                h="173px"
                justifyItems="center"
                alignItems="center"
                overflow="hidden"
              >
                <Image
                  minH="100%"
                  w="auto"
                  src={continent.image}
                  alt={continent.city}
                />
              </Flex>
              <HStack
                h="104px"
                alignContent="center"
                justifyContent="space-between"
                px="24px"
              >
                <VStack alignItems="start">
                  <Text
                    lineHeight="25px"
                    fontWeight="600"
                    fontSize="20px"
                    color="brand.gray-900"
                  >
                    {continent.city}
                  </Text>
                  <Text
                    lineHeight="26px"
                    fontWeight="500"
                    fontSize="16px"
                    color="brand.gray-400"
                  >
                    {continent.country}
                  </Text>
                </VStack>
                <Box w={30} h={30}>
                  <CircleFlag countryCode={continent.flag} />
                </Box>
              </HStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </VStack>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let { slug } = params;

  const props: ContinentProps = {
    slug,
    title: "Europa",
    description:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
    totalCountries: "50",
    totalLanguages: "60",
    totalCities: "27",
    data: [
      {
        country: "Reino Unido",
        city: "Londres",
        image: "/cities/europe/london.jpeg",
        flag: "gb",
      },
      {
        country: "França",
        city: "Paris",
        image: "/cities/europe/paris.jpeg",
        flag: "fr",
      },
      {
        country: "Itália",
        city: "Roma",
        image: "/cities/europe/roma.jpeg",
        flag: "it",
      },
      {
        country: "República Tcheca",
        city: "Praga",
        image: "/cities/europe/praga.jpeg",
        flag: "cz",
      },
      {
        country: "Holanda",
        city: "Amsterdã",
        image: "/cities/europe/amsterdam.jpeg",
        flag: "nl",
      },
    ],
  };
  return { props };
};
