import { Flex, Image, Button } from "@chakra-ui/react";
import Logo from "../../../public/logo.png";

interface HeaderProps {
  continent: string;
}

export function Header({ continent }: HeaderProps) {
  return (
    <Flex
      w="100%"
      my="7 "
      maxWidth={1440}
      mx="auto"
      px="4"
      border="1px"
      alignItems="center"
    >
      {continent !== "home" ? (
        <Button position="absolute" marginLeft="3rem">
          <Image src="/back.png" alt="Back to home" />
        </Button>
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
