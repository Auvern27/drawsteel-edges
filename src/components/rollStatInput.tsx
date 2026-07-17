import { NumberInput } from "@mantine/core";

interface RollStatInputProps {
  label: string;
  description: string;
  value: number;
  onChange: (value: string | number) => void;
  allowNegative?: boolean;
}

export function RollStatInput({
  label,
  description,
  value,
  onChange,
  allowNegative = false,
}: RollStatInputProps) {
  return (
    <NumberInput
      label={label}
      description={description}
      value={value}
      onChange={onChange}
      allowNegative={allowNegative}
      allowDecimal={false}
      bg="var(--mantine-color-steel-8)"
      p="lg"
      style={{
        border: "1px solid var(--mantine-color-steel-6)",
        clipPath:
          "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
      }}
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          minHeight: 0,
        },
        label: {
          textTransform: "uppercase",
          fontSize: "var(--mantine-font-size-sm)",
          fontWeight: 600,
          letterSpacing: "0.05em",
          color: "var(--mantine-color-steel-1)",
        },
        description: {
          textAlign: "center",
          fontStyle: "italic",
          color: "var(--mantine-color-steel-4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          minHeight: 0,
          marginTop: 6,
          marginBottom: 12,
        },
        input: {
          width: 88,
          height: 88,
          textAlign: "center",
          fontSize: 22,
          fontFamily: "var(--mantine-font-family-monospace)",
          fontWeight: 600,
          backgroundColor: "var(--mantine-color-steel-9)",
          border: "1px solid var(--mantine-color-steel-6)",
          color: "var(--mantine-color-ember-4)",
        },
        controls: {
          borderLeft: "1px solid var(--mantine-color-steel-6)",
        },
        control: {
          color: "var(--mantine-color-steel-3)",
          backgroundColor: "var(--mantine-color-steel-9)",
          borderColor: "var(--mantine-color-steel-6)",
        },
      }}
    />
  );
}
