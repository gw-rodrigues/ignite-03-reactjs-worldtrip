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
  image: string;
  totalCountries: string;
  totalLanguages: string;
  totalCities: string;
}

export default function Continent({
  slug,
  title,
  description,
  image,
  totalCountries,
  totalLanguages,
  totalCities,
}: ContinentProps) {
  return (
    <VStack w="100%" margin="auto">
      <Header continent={String(slug)} />

      <VStack
        w="100%"
        minH={["150px", "300px", "500px"]}
        bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${image}') center no-repeat`}
        bgSize="cover"
        justifyContent="center"
        alignContent="center"
        position="relative"
      >
        <Text
          fontWeight="semibold"
          fontSize={["1.75rem", "4xl", "5xl"]}
          lineHeight="3.375rem"
          color="gray.50"
          position={{ base: "relative", md: "absolute" }}
          bottom={{ base: 0, md: "3.68rem" }}
          left={{ base: 0, md: "8.75%" }}
        >
          {title}
        </Text>
      </VStack>

      <HStack
        py={[6, 12, 20]}
        mx="auto"
        flexWrap="wrap"
        justifyContent={{ base: "center", xl: "space-between" }}
        w="100%"
        maxW={1160}
        px={{ base: 4, xl: 0 }}
        gap={[4, 30, 70]}
      >
        <Text
          maxW={{ base: "100%", xl: 600 }}
          fontWeight="normal"
          fontSize={["sm", "lg", "2xl"]}
          lineHeight={["short", 7, 9]}
          textAlign="justify"
        >
          {description}
        </Text>

        <Flex
          gap={{ base: 2, md: 42 }}
          wrap="wrap"
          justifyContent={{ sm: "center", base: "space-between" }}
          direction={{ base: "column", xs: "row" }}
          border="1px solid red"
          width={["100%", "auto"]}
        >
          <VStack alignItems={{ base: "start", xl: "center" }}>
            <Text
              textAlign="left"
              fontWeight="semibold"
              fontSize={{ base: "2xl", lg: "5xl" }}
              lineHeight={{ base: 9, lg: "4.5rem" }}
              color="brand.yellow-550"
            >
              {totalCountries}
            </Text>
            <Text
              fontWeight={{ lg: "semibold" }}
              fontSize={{ base: "lg", lg: "2xl" }}
              lineHeight={{ base: "1.6875rem", lg: 9 }}
              color="brand.gray-900"
            >
              países
            </Text>
          </VStack>
          <VStack alignItems={{ base: "start", xl: "center" }}>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "2xl", lg: "5xl" }}
              lineHeight={{ base: 9, lg: "4.5rem" }}
              color="brand.yellow-550"
            >
              {totalLanguages}
            </Text>
            <Text
              fontWeight={{ lg: "semibold" }}
              fontSize={{ base: "lg", lg: "2xl" }}
              lineHeight={{ base: "1.6875rem", lg: 9 }}
              color="brand.gray-900"
            >
              línguas
            </Text>
          </VStack>
          <VStack alignItems={{ base: "start", xl: "center" }}>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "2xl", lg: "5xl" }}
              lineHeight={{ base: 9, lg: "4.5rem" }}
              color="brand.yellow-550"
            >
              {totalCities}
            </Text>
            <HStack>
              <Text
                fontWeight={{ lg: "semibold" }}
                fontSize={{ base: "lg", lg: "2xl" }}
                lineHeight={{ base: "1.6875rem", lg: 9 }}
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
        </Flex>
      </HStack>

      <Cities continent={slug} />
    </VStack>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const props: ContinentProps | null = await fetch(
    `http://localhost:3000/api/getContinentById?continent=${slug}`
  ).then((res) => res.json());

  if (!props) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props };
};
