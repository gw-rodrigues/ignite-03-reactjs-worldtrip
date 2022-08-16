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
    const continentsTemp: CarouselProps[] = [
      {
        slug: "europa",
        title: "Europa",
        slogan: "O continente mais antigo.",
        image: "/banner/europe.jpeg",
      },
      {
        slug: "africa",
        title: "Africa",
        slogan: "O continente selvagem.",
        image: "/banner/africa.jpeg",
      },
      {
        slug: "america-norte",
        title: "America Norte",
        slogan: "O continente dos sonhos.",
        image: "/banner/america-nort.jpeg",
      },
      {
        slug: "america-sul",
        title: "America Sul",
        slogan: "O continente da diversão.",
        image: "/banner/america-sul.jpeg",
      },
      {
        slug: "asia",
        title: "Asia",
        slogan: "O continente das culturas.",
        image: "/banner/asia.jpeg",
      },
      {
        slug: "oceania",
        title: "Oceania",
        slogan: "O continente marítimo.",
        image: "/banner/oceania.jpeg",
      },
    ];

    setContinents(continentsTemp);
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
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <VStack
              w="100%"
              h="450px"
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
                    fontSize="48px"
                    lineHeight="72px"
                    color="brand.gray-50"
                  >
                    {continent.title}
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize="24px"
                    lineHeight="36px"
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
