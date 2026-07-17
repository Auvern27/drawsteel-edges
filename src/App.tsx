import { useState, type ReactNode } from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Flex,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { RollStatInput } from "./components/rollStatInput.tsx";
import ResultBox from "./components/resultBox.tsx";
import { EdgeDivider } from "./components/edgeDivider.tsx";
import {
  computeEdgeExpectedDamageIncrease,
  computeDoubleEdgeExpectedDamageIncrease,
  computeEdgeToDoubleEdgeExpectedDamageIncrease,
} from "./logic/functions.ts";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Text
      tt="uppercase"
      fw={600}
      fz="xs"
      c="steel.4"
      style={{ letterSpacing: "0.15em" }}
    >
      {children}
    </Text>
  );
}

function App() {
  const [rollBonus, setRollBonus] = useState<number>(2);
  const handleRollBonusChange = (value: string | number) => {
    setRollBonus(typeof value === "number" ? value : parseInt(value) || 0);
  };
  const [diffT1T2, setDiffT1T2] = useState<number>(2);
  const handleDiffT1T2Change = (value: string | number) => {
    setDiffT1T2(typeof value === "number" ? value : parseInt(value) || 0);
  };
  const [diffT2T3, setDiffT2T3] = useState<number>(2);
  const handleDiffT2T3Change = (value: string | number) => {
    setDiffT2T3(typeof value === "number" ? value : parseInt(value) || 0);
  };

  const edgeExpectedDamageIncrease = computeEdgeExpectedDamageIncrease(
    rollBonus,
    diffT1T2,
    diffT2T3,
  );
  const doubleEdgeExpectedDamageIncrease =
    computeDoubleEdgeExpectedDamageIncrease(rollBonus, diffT1T2, diffT2T3);
  const edgeToDoubleEdgeExpectedDamageIncrease =
    computeEdgeToDoubleEdgeExpectedDamageIncrease(
      rollBonus,
      diffT1T2,
      diffT2T3,
    );

  return (
    <Box
      bg="var(--mantine-color-steel-9)"
      mih="100vh"
      py={{ base: 40, sm: 60 }}
    >
      <Container size="md" px={{ base: 16, sm: 32 }}>
        <Stack gap={4} align="center" mb={{ base: 32, sm: 48 }}>
          <Text
            tt="uppercase"
            c="ember.4"
            fw={600}
            fz="xs"
            style={{ letterSpacing: "0.2em" }}
          >
            Combat Math
          </Text>
          <Title
            order={1}
            ta="center"
            fz={{ base: 32, sm: 44 }}
            c="steel.0"
            tt="uppercase"
            style={{ letterSpacing: "0.03em" }}
          >
            Draw Steel Edges
          </Title>
          <Box maw={280} w="100%" mt={8}>
            <EdgeDivider />
          </Box>
          <Text c="steel.3" ta="center" maw={480} mt={12} fz="sm">
            Estimate the expected damage swing from Edges and Double Edges,
            based on your roll bonus and tier breakpoints.
          </Text>
        </Stack>

        <Flex direction="column" gap={{ base: 32, sm: 48 }}>
          <Box>
            <SectionLabel>Inputs</SectionLabel>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt={16}>
              <RollStatInput
                label="Roll Bonus"
                description="Usually your highest characteristic"
                value={rollBonus}
                onChange={handleRollBonusChange}
                allowNegative={true}
              />
              <RollStatInput
                label="T1 → T2 Difference"
                description="The difference in damage between the Tier 1 and Tier 2 results of the ability"
                value={diffT1T2}
                onChange={handleDiffT1T2Change}
              />
              <RollStatInput
                label="T2 → T3 Difference"
                description="The difference in damage between the Tier 2 and Tier 3 results of the ability"
                value={diffT2T3}
                onChange={handleDiffT2T3Change}
              />
            </SimpleGrid>
          </Box>

          <Box>
            <SectionLabel>Results</SectionLabel>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt={16}>
              <ResultBox
                title="Edge"
                description="Damage increase from getting an edge"
                value={edgeExpectedDamageIncrease}
              />
              <ResultBox
                title="Double Edge"
                description="Damage increase from getting a double edge"
                value={doubleEdgeExpectedDamageIncrease}
              />
              <ResultBox
                title="Edge → Double Edge"
                description="Damage increase from converting an edge to a double edge"
                value={edgeToDoubleEdgeExpectedDamageIncrease}
              />
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
