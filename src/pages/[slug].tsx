/*
- América do Norte;
- América do Sul;
- Ásia;
- África;
- Europa;
- Oceania.
*/

import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Cities } from "../components/Cities";
import { ContinentData } from "../components/ContinentData";
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

        <ContinentData
          totalLanguages={totalLanguages}
          totalCities={totalCities}
          totalCountries={totalCountries}
        />
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
