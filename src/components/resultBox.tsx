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
      bg="var(--mantine-color-steel-8)"
      p="lg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        minHeight: 0,
        border: "1px solid var(--mantine-color-steel-6)",
      }}
    >
      <Text
        size="sm"
        fw={600}
        tt="uppercase"
        c="steel.1"
        ta="center"
        style={{ letterSpacing: "0.05em" }}
      >
        {title}
      </Text>
      <Text
        fs="italic"
        c="steel.4"
        fz="sm"
        style={{
          textAlign: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: 0,
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {description}
      </Text>
      <Box
        bg="var(--mantine-color-steel-9)"
        mt="md"
        mb={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
          border: "1px solid var(--mantine-color-ember-6)",
        }}
      >
        <Text
          ff="monospace"
          fw={600}
          c="ember.4"
          style={{ fontSize: 26, fontVariantNumeric: "tabular-nums" }}
        >
          {value >= 0 ? "+" : ""}
          {value.toFixed(2)}
        </Text>
      </Box>
    </Box>
  );
}

export default ResultBox;
