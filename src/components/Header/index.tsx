import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  continent: string;
}

export function Header({ continent }: HeaderProps) {
  return (
    <Flex w="100%" my="7 " maxWidth={1440} mx="auto" px="4" alignItems="center">
      {continent !== "home" ? (
        <Link href="/">
          <ChakraLink position="absolute" marginLeft="3rem">
            <Image src="/back.png" alt="Back to home" />
          </ChakraLink>
        </Link>
      ) : null}
      <Image
        margin="auto"
        height={45.92}
        src="/logo.png"
        alt="Worldtrip logo"
      />
    </Flex>
  );
}
