function carFleet(target: number, position: number[], speed: number[]): number {
  if (position.length === 1) {
    return 1
  }

  const cars = position
    .map((p, index) => [p, speed[index]])
    .sort((zip1, zip2) => zip1[0] - zip2[0])

  function kissAss(a: number, b: number) {
    const timeToTargetB = (target - cars[b][0]) / cars[b][1]
    const timeToTargetA = (target - cars[a][0]) / cars[a][1]
    return timeToTargetA <= timeToTargetB
  }

  const fleets = [cars.length - 1]
  for (let i = cars.length - 2; i >= 0; i--) {
    const catchedUp = kissAss(i, fleets[fleets.length - 1])
    if (!catchedUp) {
      fleets.push(i)
    }
  }

  return fleets.length
}

const examples = [
  [[100, [0, 2, 4], [4, 2, 1]], 1],
  [[12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]], 3],
  [[10, [3], [3]], 1],
  [[10, [6, 8], [3, 2]], 2],
  [[10, [0, 4, 2], [2, 1, 3], 1]],
  [
    [
      31,
      [5, 26, 18, 25, 29, 21, 22, 12, 19, 6],
      [7, 6, 6, 4, 3, 4, 9, 7, 6, 4],
    ],
    6,
  ],
]

// console.log(examples.map((e) => carFleet(...e[0])))
// console.log(carFleet(...examples[5][0]))
