/*
- América do Norte;
- América do Sul;
- Ásia;
- África;
- Europa;
- Oceania.
*/

import { Box, Flex, HStack, Text, Tooltip, VStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Cities } from "../components/Cities";
import { Header } from "../components/Header";

interface ContinentProps {
  slug: string | string[];
  title: string;
  description: string;
  totalCountries: string;
  totalLanguages: string;
  totalCities: string;
}

export default function Continent({
  slug,
  title,
  description,
  totalCountries,
  totalLanguages,
  totalCities,
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

      <Cities continent={slug} />
    </VStack>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let { slug } = params;

  if (slug !== "europa") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const props: ContinentProps = {
    slug,
    title: "Europa",
    description:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
    totalCountries: "50",
    totalLanguages: "60",
    totalCities: "27",
  };
  return { props };
};
