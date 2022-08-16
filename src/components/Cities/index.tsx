import { useEffect, useState } from "react";
import { Box, Flex, HStack, Image, VStack, Text } from "@chakra-ui/react";

import { CircleFlag } from "react-circle-flags";

interface CitiesContinentProps {
  continent: string | string[];
}

interface CitiesProps {
  city: string;
  country: string;
  image: string;
  flag: string;
}

export function Cities({ continent }: CitiesContinentProps) {
  const [cities, setCities] = useState<CitiesProps[] | null>([]);
  useEffect(() => {
    async function getCities() {
      await fetch(
        `http://localhost:3000/api/getContinentCities?continent=${continent}`
      )
        .then((data) => data.json())
        .then(setCities);
    }
    getCities();
  }, [continent]);

  if (!cities)
    return (
      <Text fontWeight="500" fontSize="36px" lineHeight="54px">
        As cidades não foram encontradas.
      </Text>
    );

  return (
    <VStack alignItems="start" maxW={1160}>
      <Text fontWeight="500" fontSize="36px" lineHeight="54px">
        Cidades +100
      </Text>
      <Flex
        flexWrap="wrap"
        gap="45px"
        py="40px"
        width="100%"
        justifyItems="start"
      >
        {cities.map(({ country, city, image, flag }: CitiesProps) => (
          <Box
            key={country}
            w="256px"
            h=" 279px"
            border="1px solid"
            borderColor="brand.yellow-550"
            borderRadius="4px"
            bg="white"
            overflow="hidden"
            transition="filter .2s"
            _hover={{ filter: "brightness(.8)" }}
          >
            <Flex
              w="100%"
              h="173px"
              justifyItems="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image minH="100%" w="auto" src={image} alt={city} />
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
                  {city}
                </Text>
                <Text
                  lineHeight="26px"
                  fontWeight="500"
                  fontSize="16px"
                  color="brand.gray-400"
                >
                  {country}
                </Text>
              </VStack>
              <Box w={30} h={30}>
                <CircleFlag countryCode={flag} />
              </Box>
            </HStack>
          </Box>
        ))}
      </Flex>
    </VStack>
  );
}
