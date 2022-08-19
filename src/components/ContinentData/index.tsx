import { HStack, Text, VStack, Tooltip, Flex } from "@chakra-ui/react";
import { ContinentStats } from "./continentStats";

interface ContinentDataProps {
  totalCountries: string;
  totalLanguages: string;
  totalCities: string;
}
export function ContinentData({
  totalCities,
  totalCountries,
  totalLanguages,
}: ContinentDataProps) {
  return (
    <Flex
      wrap="wrap"
      justifyContent={{ base: "space-between" }}
      alignContent="center"
      direction={{ base: "column", xs: "row" }}
      width={["100%"]}
      maxW={490}
    >
      <ContinentStats title="países" total={totalCountries} />
      <ContinentStats title="línguas" total={totalLanguages} />
      <ContinentStats
        title="cidades +100"
        tooltip={true}
        total={totalCities}
        tooltipLabel="Quantidade de cidades que tem este continente."
      />
    </Flex>
  );
}
