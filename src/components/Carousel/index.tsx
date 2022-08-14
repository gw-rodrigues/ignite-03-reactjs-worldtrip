import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export function Carousel() {
  return (
    <Box w="100%" maxW={1240} mx="auto" paddingBottom="3.25rem">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <VStack
            w="100%"
            h="450px"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner/europe.jpeg') center"
          >
            <Text
              fontWeight="700"
              fontSize="48px"
              lineHeight="72px"
              color="gray.50"
            >
              Europa
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              color="gray.300"
            >
              O continente mais antigo.
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
          <VStack
            w="100%"
            h="450px"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner/africa.jpeg') center"
          >
            <Text
              fontWeight="700"
              fontSize="48px"
              lineHeight="72px"
              color="gray.50"
              textShadow="2xl"
            >
              Africa
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              color="gray.300"
              textShadow="2xl"
            >
              O continente selvagem.
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
          <VStack
            w="100%"
            h="450px"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner/america-nort.jpeg') center"
          >
            <Text
              fontWeight="700"
              fontSize="48px"
              lineHeight="72px"
              color="gray.50"
              textShadow="2xl"
            >
              America do norte
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              color="gray.300"
              textShadow="2xl"
            >
              O continente dos sonhos.
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
          <VStack
            w="100%"
            h="450px"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner/america-sul.jpeg') center"
          >
            <Text
              fontWeight="700"
              fontSize="48px"
              lineHeight="72px"
              color="gray.50"
              textShadow="2xl"
            >
              America do sul
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              color="gray.300"
              textShadow="2xl"
            >
              O continente da diversão.
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
          <VStack
            w="100%"
            h="450px"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner/asia.jpeg') center"
          >
            <Text
              fontWeight="700"
              fontSize="48px"
              lineHeight="72px"
              color="gray.50"
              textShadow="2xl"
            >
              Asia
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              color="gray.300"
              textShadow="2xl"
            >
              O continente das culturas.
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
          <VStack
            w="100%"
            h="450px"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner/oceania.jpeg') center"
          >
            <Text
              fontWeight="700"
              fontSize="48px"
              lineHeight="72px"
              color="gray.50"
              textShadow="2xl"
            >
              Oceania
            </Text>
            <Text
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              color="gray.300"
              textShadow="2xl"
            >
              O continente marítimo.
            </Text>
          </VStack>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
