import { Box, Flex, Text } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.module.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Carousel() {
  return (
    <Box w="100%" maxW={1240} h="100%" maxH={450} position="relative" mx="auto">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper"
      >
        <SwiperSlide>
          <Flex w="100%" h="450px" alignItems="center" justifyContent="center">
            <Text>text 1</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex w="100%" h="450px" alignItems="center" justifyContent="center">
            <Text>text 2</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex w="100%" h="450px" alignItems="center" justifyContent="center">
            <Text>text 3</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex w="100%" h="450px" alignItems="center" justifyContent="center">
            <Text>text 4</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex w="100%" h="450px" alignItems="center" justifyContent="center">
            <Text>text 5</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
