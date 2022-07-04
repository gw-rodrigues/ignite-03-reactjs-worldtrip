import { Flex, Heading, Image } from "@chakra-ui/react";
import Logo from "../../../public/logo.png";
export function Header() {
  return (
    <Heading w="100%" my="6" maxWidth={1440} mx="auto" px="6" border="1px">
      <Image src="/logo.png" alt="Worldtrip logo" />
    </Heading>
  );
}
