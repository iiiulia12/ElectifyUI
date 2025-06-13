export const makeChartData = candidateResults =>
  candidateResults.map(c => ({
    name: `${c.firstName} ${c.lastName}`,
    votes: c.votes
  }))
