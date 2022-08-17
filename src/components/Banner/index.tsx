import { Box, Flex, Image, Text, Stack, HStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box w="100%" h={[163, 223, 368.21]} mt="2">
      <Flex
        direction="column"
        w="100%"
        bg="#fff 10% 25% url('/sky.jpeg') no-repeat fixed"
        bgSize="cover"
        alignItems="center"
        justifyItems="center"
        px="4"
      >
        <HStack
          justifyContent={["center", "space-between"]}
          alignItems="center"
          justifyItems="center"
          w="100%"
          maxW={1160}
          h={[163, 223, 335]}
        >
          <Box maxW={524} zIndex={1}>
            <Text
              fontWeight="medium"
              fontSize={["xl", "3xl", "4xl"]}
              lineHeight={["3xl", "5xl"]}
              color="brand.gray-50"
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text
              fontWeight="normal"
              fontSize={["sm", "md", "lg"]}
              lineHeight={["xl", "3xl"]}
              marginTop="5"
              color="brand.gray-300"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Box
            w="100%"
            maxW={{ md: 333, lg: 433 }}
            display={["none", "none", "block"]}
            pos="relative"
          >
            <Image
              position="absolute"
              bottom={["-12.7rem"]}
              src="/airplane.png"
              alt="airplane"
            />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
