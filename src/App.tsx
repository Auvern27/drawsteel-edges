import { useState } from "react";
import { SimpleGrid, Box, Center } from "@mantine/core";
import { RollStatInput } from "./components/rollStatInput.tsx";
import ResultBox from "./components/resultBox.tsx";
import {
  computeEdgeExpectedDamageIncrease,
  computeDoubleEdgeExpectedDamageIncrease,
  computeEdgeToDoubleEdgeExpectedDamageIncrease,
} from "./logic/functions.ts";

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

  // Results
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
    <>
      <Box
        bg="var(--mantine-color-gray-2)"
        mt={20}
        mb={20}
        ml={60}
        mr={60}
        mih={500}
        bdrs={10}
      >
        <Center>
          <h1>Draw Steel Edges</h1>
        </Center>
        <SimpleGrid
          //   bg="var(--mantine-color-blue-3)"
          cols={3}
          spacing="xs"
          mx="auto"
          style={{
            width: "80%",
          }}
        >
          <RollStatInput
            label="Roll Bonus"
            description="Usually your highest characteristic"
            value={rollBonus}
            onChange={handleRollBonusChange}
            allowNegative={true}
          />
          <RollStatInput
            label="T1 to T2 difference"
            description="The difference in damage between the Tier 1 and Tier 2 results of the ability"
            value={diffT1T2}
            onChange={handleDiffT1T2Change}
          />
          <RollStatInput
            label="T2 to T3 difference"
            description="The difference in damage between the Tier 2 and Tier 3 results of the ability"
            value={diffT2T3}
            onChange={handleDiffT2T3Change}
          />
        </SimpleGrid>

        <Center>
          <h2>Expected Damage Increase</h2>
        </Center>
        <SimpleGrid
          // bg="var(--mantine-color-blue-2)"
          cols={3}
          mx="auto"
          spacing="md"
          pl={30}
          pr={30}
          style={{
            width: "80%",
          }}
        >
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
            title="Edge to Double Edge"
            description="Damage increase from getting an edge when you already have one"
            value={edgeToDoubleEdgeExpectedDamageIncrease}
          />
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
