// functions.ts

const tier2LowerThreshold: number = 12; // Tier 2 from 12-17
const tier3LowerThreshold: number = 17; // Tier 3 17+

const roll2D10ProbDist: Map<number, number> = new Map([
  [2, 0.01],
  [3, 0.02],
  [4, 0.03],
  [5, 0.04],
  [6, 0.05],
  [7, 0.06],
  [8, 0.07],
  [9, 0.08],
  [10, 0.09],
  [11, 0.1],
  [12, 0.09],
  [13, 0.08],
  [14, 0.07],
  [15, 0.06],
  [16, 0.05],
  [17, 0.04],
  [18, 0.03],
  [19, 0.02],
  [20, 0.01],
]);

console.log(tier2LowerThreshold);
console.log(tier3LowerThreshold);
console.log(roll2D10ProbDist);

export function computeEdgeExpectedDamageIncrease(
  rollBonus: number,
  diffT1T2: number,
  diffT2T3: number,
): number {
  // Probability that an edge will increase the result from tier 1 to tier 2
  const probT1ToT2 =
    (roll2D10ProbDist.get(tier2LowerThreshold - rollBonus - 2) ?? 0) +
    (roll2D10ProbDist.get(tier2LowerThreshold - rollBonus - 1) ?? 0);
  // Probability that an edge will increase the result from tier 2 to tier 3
  const probT2ToT3 =
    (roll2D10ProbDist.get(tier3LowerThreshold - rollBonus - 2) ?? 0) +
    (roll2D10ProbDist.get(tier3LowerThreshold - rollBonus - 1) ?? 0);

  const expectedDamageIncrease = probT1ToT2 * diffT1T2 + probT2ToT3 * diffT2T3;
  return expectedDamageIncrease;
}

export function computeDoubleEdgeExpectedDamageIncrease(
  rollBonus: number,
  diffT1T2: number,
  diffT2T3: number,
): number {
  // Probability of rolling Tier 1 (And increasing to Tier 2)
  let probT1ToT2 = 0;
  for (
    let result = 2;
    result <= tier2LowerThreshold - rollBonus - 1;
    result++
  ) {
    probT1ToT2 += roll2D10ProbDist.get(result) ?? 0;
  }

  // Probability of rolling Tier 2 (And increasing to Tier 3)
  let probT2ToT3 = 0;
  for (
    let result = tier2LowerThreshold;
    result <= tier3LowerThreshold - rollBonus - 1;
    result++
  ) {
    probT2ToT3 += roll2D10ProbDist.get(result) ?? 0;
  }

  const expected_damage_increase =
    probT1ToT2 * diffT1T2 + probT2ToT3 * diffT2T3;

  return expected_damage_increase;
}

export function computeEdgeToDoubleEdgeExpectedDamageIncrease(
  rollBonus: number,
  diffT1T2: number,
  diffT2T3: number,
): number {
  return (
    computeDoubleEdgeExpectedDamageIncrease(rollBonus, diffT1T2, diffT2T3) -
    computeEdgeExpectedDamageIncrease(rollBonus, diffT1T2, diffT2T3)
  );
}
