import { Box, Text } from "@mantine/core";

function ResultBox({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: number;
}) {
  return (
    <Box
      bg="var(--mantine-color-gray-3)"
      p={10}
      bdrs={10}
      mt={20}
      ml={20}
      mb={20}
      mr={20}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        justifySelf: "center",
        minHeight: 0,
      }}
    >
      <Text
        bg="var(--mantine-color-gray-4)"
        size="lg"
        fw={700}
        style={{ textAlign: "center" }}
      >
        {title}
      </Text>
      <Text
        bg="var(--mantine-color-gray-5)"
        style={{
          textAlign: "justify",
          display: "flex",
          flexGrow: 1,
          minHeight: 0,
        }}
      >
        {description}
      </Text>
      <Box
        bg="var(--mantine-color-green-3)"
        bdrs={10}
        mt={20}
        mb={20}
        style={{
          display: "flex",
          justifyContent: "center",
          width: 100,
          height: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 28 }}>{value.toFixed(2)}</Text>
      </Box>
    </Box>
  );
}

export default ResultBox;
