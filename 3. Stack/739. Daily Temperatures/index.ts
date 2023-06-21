function dailyTemperatures(temperatures: number[]): number[] {
  const answer = Array<number>(temperatures.length).fill(0)

  for (let i = temperatures.length - 2; i >= 0; i--) {
    let intermediateDays = 1
    let nextDay = i + 1
    while (nextDay < temperatures.length) {
      if (temperatures[i] < temperatures[nextDay]) {
        break
      }
      if (answer[nextDay] === 0) {
        intermediateDays = 0
        break
      }
      intermediateDays += answer[nextDay]
      nextDay += answer[nextDay]
    }
    answer[i] = intermediateDays
  }

  return answer
}
