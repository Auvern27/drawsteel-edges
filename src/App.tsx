import { useState } from 'react'
import {NumberInput} from "@mantine/core";
import { edgeExpectedDamageIncrease as computeEdgeExpectedDamageIncrease, doubleEdgeExpectedDamageIncrease as computeDoubleEdgeExpectedDamageIncrease, edgeToDoubleEdgeExpectedDamageIncrase as computeEdgeToDoubleEdgeExpectedDamageIncrease } from './logic/functions.ts';

function App(){

  const [rollBonus, setRollBonus] = useState<number>(2);
  const handleRollBonusChange = (value: string | number) => {
    setRollBonus(typeof value === 'number' ? value : parseInt(value) || 0);
  }
  const [diffT1T2, setDiffT1T2] = useState<number>(2);
  const handleDiffT1T2Change = (value: string | number) => {
    setDiffT1T2(typeof value === 'number' ? value : parseInt(value) || 0);
  }
  const [diffT2T3, setDiffT2T3] = useState<number>(2);
  const handleDiffT2T3Change = (value: string | number) => {
    setDiffT2T3(typeof value === 'number' ? value : parseInt(value) || 0);
  }

  // Results
  const edgeExpectedDamageIncrease = computeEdgeExpectedDamageIncrease(rollBonus, diffT1T2, diffT2T3);
  const doubleEdgeExpectedDamageIncrease = computeDoubleEdgeExpectedDamageIncrease(rollBonus, diffT1T2, diffT2T3);
  const edgeToDoubleEdgeExpectedDamageIncrease = computeEdgeToDoubleEdgeExpectedDamageIncrease(rollBonus, diffT1T2, diffT2T3);

  return (
    <>
        <section >
            <h1>Draw Steel Edges</h1>
        </section>
        <NumberInput
            label="Roll Bonus"
            description="Usually your highest characteristic"
            placeholder="2"
            value={rollBonus}
            onChange={handleRollBonusChange}
        />
        <NumberInput
            label="T1 to T2 difference"
            description="The difference in damage between the Tier 1 and Tier 2 results of the ability"
            placeholder="2"
            value={diffT1T2}
            onChange={handleDiffT1T2Change}
        />
        <NumberInput
            label="T2 to T3 difference"
            description="The difference in damage between the Tier 2 and Tier 3 results of the ability"
            placeholder="2"
            value={diffT2T3}
            onChange={handleDiffT2T3Change}
        />
        <p>Edge Expected Damage Increase: {edgeExpectedDamageIncrease.toFixed(2)}</p>
        <p>Double Edge Expected Damage Increase: {doubleEdgeExpectedDamageIncrease.toFixed(2)}</p>
        <p>Edge to Double Edge Expected Damage Increase: {edgeToDoubleEdgeExpectedDamageIncrease.toFixed(2)}</p>
    </>
  )
}


export default App