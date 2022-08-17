import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box w="100%" h="368.21px" position="relative" marginTop="0.5rem">
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
              color="brand.gray-50"
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text
              fontWeight="400"
              fontSize="20px"
              lineHeight="30px"
              marginTop="1.25rem"
              color="brand.gray-300"
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
  );
}
