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
      p={5}
      bg="var(--mantine-color-blue-2)"
      bdrs={20}
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "80%",
          justifySelf: "center",
        },
        description: {
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        },
        // wrapper: {
        //   width: 80,
        // },
        input: {
          width: 80,
          height: 80,
          textAlign: "center",
          fontSize: 24,
        },
      }}
    />
  );
}
