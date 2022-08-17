import { Box, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CarouselProps {
  slug: string;
  title: string;
  slogan: string;
  image: string;
}

export function Carousel() {
  const [continents, setContinents] = useState<CarouselProps[]>([]);

  useEffect(() => {
    async function getContinents() {
      await fetch(`http://localhost:3000/api/getContinents`)
        .then((data) => data.json())
        .then(setContinents);
    }
    getContinents();
  }, []);

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
        {continents &&
          continents.map((continent) => (
            <SwiperSlide key={continent.slug}>
              <VStack
                w="100%"
                h={["250px", "350px", "450px"]}
                alignItems="center"
                justifyContent="center"
                background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${continent.image}') center`}
              >
                <Link href={`/${continent.slug}`}>
                  <ChakraLink
                    textAlign="center"
                    transition="filter .2s"
                    _hover={{
                      textDecoration: "none",
                      filter: "brightness(.8)",
                    }}
                  >
                    <Text
                      fontWeight="700"
                      fontSize={["24px", "32px", "48px"]}
                      lineHeight={["36px", "58px", "72px"]}
                      color="brand.gray-50"
                    >
                      {continent.title}
                    </Text>
                    <Text
                      fontWeight="700"
                      fontSize={["14px", "18px", "24px"]}
                      lineHeight={["21px", "28px", "36px"]}
                      color="brand.gray-300"
                    >
                      {continent.slogan}
                    </Text>
                  </ChakraLink>
                </Link>
              </VStack>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}
