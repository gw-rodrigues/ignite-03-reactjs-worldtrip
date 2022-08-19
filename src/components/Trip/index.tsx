import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface TripProps {
  icon: string;
  title: string;
}

export function Trip({ icon, title }: TripProps) {
  return (
    <Flex
      direction={{ sm: "row", md: "column" }}
      alignItems="center"
      transition="filter .2s"
      _hover={{ filter: "brightness(.8)" }}
    >
      <Image
        maxW="85px"
        maxH="85px"
        src={`/${icon}.png`}
        alt={icon}
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
        {title}
      </Text>
    </Flex>
  );
}
