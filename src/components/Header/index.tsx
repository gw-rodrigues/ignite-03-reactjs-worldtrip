import { Flex, Image } from "@chakra-ui/react";
import Logo from "../../../public/logo.png";
export function Header() {
  return (
    <Flex
      w="100%"
      my="7 "
      maxWidth={1440}
      mx="auto"
      px="4"
      border="1px"
      justifyContent="center"
    >
      <Image src="/logo.png" alt="Worldtrip logo" />
    </Flex>
  );
}
