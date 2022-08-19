import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  continent: string;
}

export function Header({ continent }: HeaderProps) {
  return (
    <Flex w="100%" my="7" mx="auto" maxWidth={1440} px={["2", "4"]}>
      {continent !== "home" ? (
        <Link href="/">
          <ChakraLink
            position={["relative", "absolute"]}
            marginLeft={["1rem", "2rem", "3rem"]}
          >
            <Image
              w={["16px", "32px"]}
              h={["16px", "32px"]}
              src="/back.png"
              alt="Back to home"
            />
          </ChakraLink>
        </Link>
      ) : null}
      <Image
        w="auto"
        mx="auto"
        h={[21, 30, 45.92]}
        src="/logo.png"
        alt="Worldtrip logo"
      />
    </Flex>
  );
}
