import { HStack, Text, VStack, Tooltip } from "@chakra-ui/react";

interface ContinentStatsProps {
  total: string;
  title: string;
  tooltip?: boolean;
  tooltipLabel?: string;
}

export function ContinentStats({
  total,
  title,
  tooltip = false,
  tooltipLabel,
}: ContinentStatsProps) {
  return (
    <VStack
      alignItems={{ base: "center", xs: "start", xl: "center" }}
      pt={{ base: 8, xs: 4, md: 8, xl: 0 }}
    >
      <Text
        textAlign="left"
        fontWeight="semibold"
        fontSize={{ base: "2xl", lg: "5xl" }}
        lineHeight={{ base: 9, lg: "4.5rem" }}
        color="brand.yellow-550"
      >
        {total}
      </Text>
      {tooltip ? (
        <HStack>
          <Text
            fontWeight={{ lg: "semibold" }}
            fontSize={{ base: "lg", lg: "2xl" }}
            lineHeight={{ base: "1.6875rem", lg: 9 }}
            color="brand.gray-900"
            gap="8px"
          >
            {title}
          </Text>
          <Tooltip label={tooltipLabel}>
            <Text
              display="inline-block"
              flex="1 0 16px"
              w="16px"
              h="16px"
              fontSize="10px"
              lineHeight="12px"
              color="brand.gray-400"
              borderColor="brand.gray-900"
              border="3px solid"
              borderRadius="50"
              textAlign="center"
              opacity=".5"
            >
              i
            </Text>
          </Tooltip>
        </HStack>
      ) : (
        <Text
          fontWeight={{ lg: "semibold" }}
          fontSize={{ base: "lg", lg: "2xl" }}
          lineHeight={{ base: "1.6875rem", lg: 9 }}
          color="brand.gray-900"
        >
          {title}
        </Text>
      )}
    </VStack>
  );
}
